import { useState, useEffect } from "react";
import { TabType } from "./types";
import Header from "./components/Header";
import TopNavBar from "./components/TopNavBar";
import { ALL_FACILITIES } from "./components/ToolsFacilitiesMenu";
import FooterSocialShare from "./components/FooterSocialShare";
import OcrUtility from "./components/OcrUtility";
import TranslationUtility from "./components/TranslationUtility";
import ComparativeCouncilFacility from "./components/ComparativeCouncilFacility";
import ComparativeUtility from "./components/ComparativeUtility";
import MappingUtility from "./components/MappingUtility";
import QaUtility from "./components/QaUtility";
import TreeUtility from "./components/TreeUtility";
import { BengalVedantaFacility } from "./components/BengalVedantaFacility";
import EarlyVedantaFacility from "./components/EarlyVedantaFacility";
import { BharatiyaLipiFacility } from "./components/BharatiyaLipiFacility";
import AboutUsFacility from "./components/AboutUsFacility";
import { GlossaryDrawer } from "./components/GlossaryDrawer";
import SideNavDrawer from "./components/SideNavDrawer";
import SimpleTextReader from "./components/SimpleTextReader";
import { useBharatiyaLipi } from "./context/BharatiyaLipiContext";
import {
  AppNavState,
  parseHash,
  stateToHash,
  pushNavHistory,
  replaceNavHistory,
  getFriendlyPageTitle,
} from "./utils/navigationHistory";
import { 
  Info,
  Menu,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  GitFork,
  BookOpen,
  MessageSquare,
  Scale,
  Languages,
  FileText,
  SlidersHorizontal,
  Compass,
  Grid,
  Minimize2,
  Eye
} from "lucide-react";

export default function App() {
  const { transliterate, activeLipi } = useBharatiyaLipi();

  // Initial navigation state parsed from window.location.hash
  const initialNav = typeof window !== "undefined" ? parseHash(window.location.hash) : { tab: "mapping" as TabType };

  const [activeTab, setActiveTab] = useState<TabType>(initialNav.tab || "mapping");
  const [comparativeCouncilSubTab, setComparativeCouncilSubTab] = useState<"comparative" | "qa">(initialNav.subTab || "comparative");
  const [mappingViewState, setMappingViewState] = useState<{
    subView: "catalog" | "reader" | "compare" | "commentary";
    textId?: string;
    chapterId?: string;
    verseId?: string;
    compareLeftId?: string;
    compareRightId?: string;
    commentaryId?: string;
  }>({
    subView: initialNav.subView || (initialNav.textId ? "reader" : "catalog"),
    textId: initialNav.textId,
    chapterId: initialNav.chapterId,
    verseId: initialNav.verseId,
    compareLeftId: initialNav.compareLeftId,
    compareRightId: initialNav.compareRightId,
    commentaryId: initialNav.commentaryId,
  });
  const [bengalScholarId, setBengalScholarId] = useState<number | null>(initialNav.scholarId || null);
  const [earlyThinkerId, setEarlyThinkerId] = useState<string | null>(initialNav.thinkerId || null);

  // In-memory stack to accurately track back/forward availability and titles
  const [navHistoryStack, setNavHistoryStack] = useState<AppNavState[]>([initialNav]);
  const [navIndex, setNavIndex] = useState<number>(0);

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isToolsMenuExpanded, setIsToolsMenuExpanded] = useState(false);
  const [isFocusedReadingMode, setIsFocusedReadingMode] = useState(false);

  // Two versions of the site:
  // 1. "scholarly" - The comprehensive facility with all comparative tools, trees, and analysis
  // 2. "simple" - Distraction-free version with only the text selection dropdown and pure main text
  const [siteVersion, setSiteVersion] = useState<"scholarly" | "simple">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("vedanta_site_version");
      if (saved === "simple" || saved === "scholarly") return saved;
      const hash = window.location.hash || "";
      if (hash.includes("mode=simple") || hash.includes("/simple")) return "simple";
    }
    return "scholarly";
  });

  const handleToggleSiteVersion = (version: "scholarly" | "simple") => {
    setSiteVersion(version);
    if (typeof window !== "undefined") {
      localStorage.setItem("vedanta_site_version", version);
    }
  };

  // Cross-tab interaction payloads
  const [comparativePayload, setComparativePayload] = useState<string | undefined>(undefined);
  const [translationPayload, setTranslationPayload] = useState<{ text?: string; context?: string } | undefined>(undefined);
  const [qaPayload, setQaPayload] = useState<string | undefined>(undefined);

  // Synchronize initial state with URL hash upon mounting
  useEffect(() => {
    const currentParsed = parseHash(window.location.hash);
    replaceNavHistory(currentParsed);
  }, []);

  // Listen to browser Back and Forward button navigation (popstate)
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      const stateFromHash = parseHash(window.location.hash);
      const targetState: AppNavState = (e.state && e.state.tab) ? e.state : stateFromHash;

      // Restore activeTab
      setActiveTab(targetState.tab || "mapping");

      // Restore subTab
      if (targetState.subTab) {
        setComparativeCouncilSubTab(targetState.subTab);
      }

      // Restore mapping view state
      setMappingViewState({
        subView: targetState.subView || (targetState.textId ? "reader" : "catalog"),
        textId: targetState.textId,
        chapterId: targetState.chapterId,
        verseId: targetState.verseId,
        compareLeftId: targetState.compareLeftId,
        compareRightId: targetState.compareRightId,
        commentaryId: targetState.commentaryId,
      });

      // Restore scholar or thinker modals/selections
      setBengalScholarId(targetState.scholarId || null);
      setEarlyThinkerId(targetState.thinkerId || null);

      // Close overlays so user returns cleanly to the view
      setIsSideNavOpen(false);
      setIsGlossaryOpen(false);
      setIsToolsMenuExpanded(false);

      // Update in-memory history stack index
      setNavHistoryStack((prevStack) => {
        const targetHash = stateToHash(targetState);
        let foundIdx = -1;
        for (let i = prevStack.length - 1; i >= 0; i--) {
          if (stateToHash(prevStack[i]) === targetHash) {
            foundIdx = i;
            break;
          }
        }
        if (foundIdx !== -1) {
          setNavIndex(foundIdx);
          return prevStack;
        } else {
          const updated = [...prevStack, targetState];
          setNavIndex(updated.length - 1);
          return updated;
        }
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Central state navigation dispatcher that updates URL and push history
  const navigateToState = (nextState: AppNavState, options?: { replace?: boolean }) => {
    const targetState: AppNavState = {
      tab: nextState.tab || activeTab,
      subTab: nextState.subTab,
      subView: nextState.subView,
      textId: nextState.textId,
      chapterId: nextState.chapterId,
      verseId: nextState.verseId,
      compareLeftId: nextState.compareLeftId,
      compareRightId: nextState.compareRightId,
      commentaryId: nextState.commentaryId,
      scholarId: nextState.scholarId,
      thinkerId: nextState.thinkerId,
    };

    const currentHash = window.location.hash;
    const targetHash = stateToHash(targetState);

    if (currentHash !== targetHash) {
      if (options?.replace) {
        replaceNavHistory(targetState);
      } else {
        pushNavHistory(targetState);
      }
    }

    setActiveTab(targetState.tab);
    if (targetState.subTab) {
      setComparativeCouncilSubTab(targetState.subTab);
    }
    setMappingViewState({
      subView: targetState.subView || "catalog",
      textId: targetState.textId,
      chapterId: targetState.chapterId,
      verseId: targetState.verseId,
      compareLeftId: targetState.compareLeftId,
      compareRightId: targetState.compareRightId,
      commentaryId: targetState.commentaryId,
    });
    setBengalScholarId(targetState.scholarId || null);
    setEarlyThinkerId(targetState.thinkerId || null);

    setIsToolsMenuExpanded(false);
    if (targetState.tab !== "mapping") {
      setIsFocusedReadingMode(false);
    }

    // Append to in-memory stack
    setNavHistoryStack((prev) => {
      const truncated = prev.slice(0, navIndex + 1);
      const updated = [...truncated, targetState];
      setNavIndex(updated.length - 1);
      return updated;
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Escape key exits Focused Reading Mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFocusedReadingMode) {
        setIsFocusedReadingMode(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFocusedReadingMode]);

  const handleNavigateToTab = (tab: TabType, payload?: any) => {
    setIsToolsMenuExpanded(false);
    if (tab !== "mapping") {
      setIsFocusedReadingMode(false);
    }

    let nextState: AppNavState = { tab };

    if (tab === "comparative") {
      nextState = {
        tab: "comparative_council",
        subTab: "comparative",
      };
      if (payload?.verseOrSutra) setComparativePayload(payload.verseOrSutra);
    } else if (tab === "qa" || tab === "sastrartha") {
      nextState = {
        tab: "comparative_council",
        subTab: "qa",
      };
      if (payload?.prompt) setQaPayload(payload.prompt);
    } else if (tab === "comparative_council") {
      nextState = {
        tab: "comparative_council",
        subTab: payload?.subTab || comparativeCouncilSubTab,
      };
      if (payload?.verseOrSutra) setComparativePayload(payload.verseOrSutra);
      if (payload?.prompt) setQaPayload(payload.prompt);
    } else if (tab === "translation" && payload) {
      setTranslationPayload({ text: payload.text, context: payload.context });
      nextState = { tab };
    } else if (tab === "mapping") {
      nextState = {
        tab: "mapping",
        subView: payload?.textId ? "reader" : "catalog",
        textId: payload?.textId,
        chapterId: payload?.chapterId,
        verseId: payload?.verseId,
      };
    } else if (tab === "bengal_vedanta" && payload?.scholarId) {
      nextState = {
        tab: "bengal_vedanta",
        scholarId: payload.scholarId,
      };
    } else if (tab === "early_vedanta" && payload?.thinkerId) {
      nextState = {
        tab: "early_vedanta",
        thinkerId: payload.thinkerId,
      };
    }

    navigateToState(nextState);
  };

  // In-app and browser Back button logic
  const handleGoBack = () => {
    if (isGlossaryOpen) {
      setIsGlossaryOpen(false);
      return;
    }
    if (isSideNavOpen) {
      setIsSideNavOpen(false);
      return;
    }
    if (window.history.length > 1) {
      window.history.back();
    } else if (navIndex > 0) {
      const prev = navHistoryStack[navIndex - 1];
      if (prev) {
        navigateToState(prev);
      }
    } else {
      if (activeTab !== "mapping" || mappingViewState.subView !== "catalog") {
        navigateToState({ tab: "mapping", subView: "catalog" });
      }
    }
  };

  const handleGoForward = () => {
    if (window.history.length > 1) {
      window.history.forward();
    }
  };

  const canGoBack = navIndex > 0 || (typeof window !== "undefined" && window.history.length > 1) || activeTab !== "mapping" || mappingViewState.subView !== "catalog";
  const canGoForward = navIndex < navHistoryStack.length - 1;

  const previousPageTitle = navIndex > 0 ? getFriendlyPageTitle(navHistoryStack[navIndex - 1]) : undefined;
  const currentPageTitle = getFriendlyPageTitle({
    tab: activeTab,
    subTab: comparativeCouncilSubTab,
    subView: mappingViewState.subView,
    textId: mappingViewState.textId,
    commentaryId: mappingViewState.commentaryId,
    scholarId: bengalScholarId || undefined,
    thinkerId: earlyThinkerId || undefined,
  });

  const getActiveTabDetails = (tab: TabType) => {
    if (tab === "comparative" || tab === "qa" || tab === "sastrartha") {
      const foundCouncil = ALL_FACILITIES.find((f) => f.id === "comparative_council");
      if (foundCouncil) {
        return {
          title: foundCouncil.title,
          sanskrit: foundCouncil.sanskritTitle,
          icon: foundCouncil.icon,
          badge: foundCouncil.badge,
          description: foundCouncil.description,
        };
      }
    }
    const found = ALL_FACILITIES.find((f) => f.id === tab);
    if (found) {
      return {
        title: found.title,
        sanskrit: found.sanskritTitle,
        icon: found.icon,
        badge: found.badge,
        description: found.description,
      };
    }
    return {
      title: "Paramparā Knowledge Tree",
      sanskrit: "वेदान्त-परम्परा-ज्ञानवृक्षः",
      icon: GitFork,
      badge: "Lineage Tree & Doctrines",
      description: "Lineage Succession, Sub-Prasthānas, & Master Doctrines of All Vedānta Schools",
    };
  };

  const activeDetails = getActiveTabDetails(activeTab);
  const ActiveIcon = activeDetails.icon;
  const currentTabFacility = ALL_FACILITIES.find((f) => f.id === activeTab) || ALL_FACILITIES.find((f) => f.id === "comparative_council");
  const isMappingFocusActive = isFocusedReadingMode && activeTab === "mapping";

  // If the user selected the "Simple Version" (distraction-free, sacred text only)
  if (siteVersion === "simple") {
    return (
      <SimpleTextReader
        initialTextId={mappingViewState.textId || "isopanisad"}
        initialChapterId={mappingViewState.chapterId}
        initialTab={mappingViewState.subView === "catalog" ? "catalogue" : "reader"}
        onSwitchToScholarly={(textId, chapterId, subView) => {
          handleToggleSiteVersion("scholarly");
          if (textId) {
            handleNavigateToTab("mapping", {
              subView: subView || "reader",
              textId,
              chapterId,
            });
          } else if (subView === "catalog") {
            handleNavigateToTab("mapping", {
              subView: "catalog",
            });
          }
        }}
        siteVersion={siteVersion}
        onToggleSiteVersion={handleToggleSiteVersion}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF5ED] text-[#2D2319] pb-16 transition-colors duration-200 selection:bg-[#d4af37] selection:text-[#120e0b] relative">
      {/* 1. Sticky Omnipresent Top Navigation & Menu Bar Everywhere (Hidden in Focused Reading Mode) */}
      {!isMappingFocusActive && (
        <TopNavBar
          activeTab={activeTab}
          onSelectTab={handleNavigateToTab}
          onOpenDrawer={() => setIsSideNavOpen(true)}
          onOpenGlossary={() => setIsGlossaryOpen(true)}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
          onGoBack={handleGoBack}
          onGoForward={handleGoForward}
          previousPageTitle={previousPageTitle}
          currentPageTitle={currentPageTitle}
          siteVersion={siteVersion}
          onToggleSiteVersion={handleToggleSiteVersion}
        />
      )}

      {/* Sleek Floating Side Edge Arrow Trigger - Unobtrusive and does not hide page content (Hidden in Focused Reading Mode) */}
      {!isMappingFocusActive && (
        <button
          onClick={() => setIsSideNavOpen(true)}
          type="button"
          className="fixed left-0 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-[#d4af37] via-[#fcf6ba] to-[#c59b27] text-[#7A3E00] border-y border-r border-[#ffe680] shadow-[0_4px_16px_rgba(180,130,20,0.3)] py-3 px-1.5 rounded-r-xl flex items-center justify-center hover:translate-x-1 hover:shadow-lg transition-all duration-200 cursor-pointer group"
          title="Open Tools & Facilities Sidebar Drawer"
          aria-label="Open Tools & Facilities Sidebar Drawer"
        >
          <ChevronRight className="w-4 h-4 text-[#7A3E00] group-hover:scale-125 transition-transform" />
        </button>
      )}

      {/* Main Scholarly Header (Hidden in Focused Reading Mode) */}
      {!isMappingFocusActive && <Header onSelectSearchResult={handleNavigateToTab} />}

      {/* Floating Distraction-Free Sticky Bar when in Focused Reading Mode */}
      {isMappingFocusActive && (
        <div className="sticky top-0 z-50 bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#bf953f]/40 px-4 py-2.5 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-serif font-bold text-[#8c6011]">
              Focused Reading Mode • Distraction-Free Scriptural Study
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsFocusedReadingMode(false)}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#fcf6ba] to-[#c59b27] hover:brightness-95 text-[#120e0b] border border-[#ffe680] text-xs font-mono font-bold flex items-center gap-1.5 transition cursor-pointer shadow-sm"
            title="Exit Focused Reading Mode (or press Esc)"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Exit Focused Mode (Esc)</span>
          </button>
        </div>
      )}

      <main className={`mx-auto transition-all duration-300 ${
        isMappingFocusActive 
          ? "max-w-6xl px-2 sm:px-4 md:px-6 pt-3 space-y-4" 
          : "max-w-7xl px-3 sm:px-4 md:px-6 space-y-6"
      }`}>
        {/* 2. Active Facility Primary Banner with Quick Facility Switcher & Collapsible Tools Menu (Hidden in Focused Reading Mode) */}
        {!isMappingFocusActive && (
        <div className="bg-[#FFFDF8] rounded-2xl border border-[#bf953f]/40 shadow-[0_4px_16px_rgba(160,110,20,0.06)] overflow-hidden transition-all">
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#d4af37] via-[#fcf6ba] to-[#c59b27] text-[#120e0b] shadow-sm border border-[#ffe680]">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-[#8c6011] uppercase tracking-wider">
                    Active Vedānta Facility:
                  </span>
                  <span className="text-[10px] font-mono text-[#8c6011] bg-[#FAF1E2] px-2 py-0.5 rounded-md border border-[#bf953f]/25">
                    {activeDetails.badge}
                  </span>
                </div>
                <h2 className="font-serif font-black text-base sm:text-lg text-[#2D2319] leading-tight">
                  {activeDetails.title}{" "}
                  <span className="text-xs font-serif font-normal text-[#6e5842] hidden sm:inline">
                    — {transliterate(activeDetails.sanskrit, activeLipi)}
                  </span>
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Toggle to expand/collapse the full 8-facility grid */}
              <button
                type="button"
                onClick={() => setIsToolsMenuExpanded(!isToolsMenuExpanded)}
                className={`text-xs font-mono px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-all cursor-pointer ${
                  isToolsMenuExpanded
                    ? "bg-[#d4af37]/20 border-[#bf953f] text-[#7A3E00] font-bold shadow-xs"
                    : "bg-[#bf953f]/10 hover:bg-[#bf953f]/20 border-[#bf953f]/30 text-[#8c6011]"
                }`}
                title={isToolsMenuExpanded ? "Collapse Facilities Menu" : "Expand All Facilities Menu"}
              >
                <Grid className="w-3.5 h-3.5 text-[#8c6011]" />
                <span className="hidden sm:inline">
                  {isToolsMenuExpanded ? "Hide Facilities Menu" : "All Facilities (8)"}
                </span>
                {isToolsMenuExpanded ? (
                  <ChevronUp className="w-3.5 h-3.5 text-[#8c6011]" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-[#8c6011]" />
                )}
              </button>
            </div>
          </div>

          {/* Collapsible 8-Facility Grid (only visible when user explicitly expands it) */}
          {isToolsMenuExpanded && (
            <div className="p-3.5 sm:p-4 pt-0 border-t border-[#bf953f]/20 bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EC] to-[#F7EFE1] animate-in fade-in slide-in-from-top-1 duration-200">
              <div className="flex items-center justify-between pb-2 mb-2">
                <span className="text-[11px] font-mono font-bold text-[#8c6011] uppercase tracking-wider">
                  Select A Facility To Enter:
                </span>
                <span className="text-[10px] font-serif text-[#6e5842] italic">
                  Menu will auto-collapse upon selection
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-2">
                {ALL_FACILITIES.map((facility) => {
                  const Icon = facility.icon;
                  const isActive = activeTab === facility.id;
                  return (
                    <button
                      key={facility.id}
                      type="button"
                      onClick={() => handleNavigateToTab(facility.id)}
                      className={`p-2.5 rounded-2xl border transition-all duration-150 flex flex-col items-start gap-1.5 cursor-pointer text-left relative group ${
                        isActive
                          ? "bg-gradient-to-br from-[#FFFFFF] via-[#FFFDF5] to-[#FFF8E7] text-[#7A3E00] border-2 border-[#C59B27] shadow-[0_4px_16px_rgba(197,155,39,0.28)] ring-1 ring-[#E2B755]/60 font-bold"
                          : "bg-[#FFFDF9] hover:bg-[#FAF3E4] text-[#3D2C1D] border-[#bf953f]/35 hover:border-[#bf953f] shadow-xs"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div
                          className={`p-1.5 rounded-lg ${
                            isActive
                              ? "bg-gradient-to-br from-[#d4af37] to-[#c59b27] text-[#120e0b] shadow-xs"
                              : "bg-[#FAF2E3] text-[#8c6011] border border-[#bf953f]/30"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span
                          className={`text-[9px] font-mono px-1 rounded ${
                            isActive
                              ? "bg-[#FAF2E3] text-[#7A3E00] border border-[#d4af37] font-bold"
                              : "bg-[#FAF2E3] text-[#8c6011]"
                          }`}
                        >
                          {facility.badge}
                        </span>
                      </div>

                      <div className="font-serif font-black text-xs leading-tight line-clamp-1">
                        {facility.shortLabel}
                      </div>

                      <div
                        className={`text-[10px] font-serif line-clamp-1 ${
                          isActive ? "text-[#7A3E00] font-bold" : "text-[#8c6011]"
                        }`}
                      >
                        {transliterate(facility.sanskritTitle, activeLipi)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        )}

        {/* 4. Workspace Display Container with smooth fade-in animation on tab switch */}
        <div
          key={activeTab}
          className="min-h-[500px] animate-in fade-in slide-in-from-bottom-1 duration-300 transition-all ease-out"
        >
          {activeTab === "tree" && (
            <TreeUtility
              onNavigateToTab={handleNavigateToTab}
              onOpenFacilitiesDrawer={() => setIsSideNavOpen(true)}
            />
          )}
          {activeTab === "early_vedanta" && (
            <EarlyVedantaFacility
              initialThinkerId={earlyThinkerId}
              onThinkerSelect={(thinkerId) => {
                setEarlyThinkerId(thinkerId);
                if (thinkerId) {
                  navigateToState({ tab: "early_vedanta", thinkerId });
                } else {
                  navigateToState({ tab: "early_vedanta" });
                }
              }}
              onNavigateToText={(textId) => handleNavigateToTab("mapping", { textId })}
              onNavigateToParampara={(paramparaId) => handleNavigateToTab("tree", { paramparaId })}
              onOpenSastrartha={(topicPrompt) => handleNavigateToTab("comparative_council", { subTab: "qa", prompt: topicPrompt })}
            />
          )}
          {activeTab === "bengal_vedanta" && (
            <BengalVedantaFacility
              initialScholarId={bengalScholarId}
              onScholarSelect={(scholarId) => {
                setBengalScholarId(scholarId);
                if (scholarId) {
                  navigateToState({ tab: "bengal_vedanta", scholarId });
                } else {
                  navigateToState({ tab: "bengal_vedanta" });
                }
              }}
              onNavigateToText={(textId) => handleNavigateToTab("mapping", { textId })}
              onNavigateToParampara={(paramparaId) => handleNavigateToTab("tree", { paramparaId })}
            />
          )}
          {activeTab === "bharatiya_lipi" && (
            <BharatiyaLipiFacility
              onNavigateToText={(textId) => handleNavigateToTab("mapping", { textId })}
            />
          )}
          {activeTab === "mapping" && (
            <MappingUtility
              key={`mapping-${mappingViewState.subView}-${mappingViewState.textId || "default"}-${mappingViewState.compareLeftId || ""}-${mappingViewState.compareRightId || ""}`}
              initialViewMode={mappingViewState.subView}
              initialTextId={mappingViewState.textId}
              initialChapterId={mappingViewState.chapterId}
              initialVerseId={mappingViewState.verseId}
              initialCompareMode={mappingViewState.subView === "compare"}
              initialCompareLeftId={mappingViewState.compareLeftId}
              initialCompareRightId={mappingViewState.compareRightId}
              initialCommentaryId={mappingViewState.commentaryId}
              onViewStateChange={(viewState) => {
                navigateToState({
                  tab: "mapping",
                  ...viewState,
                });
              }}
              onNavigateToTab={handleNavigateToTab}
              onOpenFacilitiesDrawer={() => setIsSideNavOpen(true)}
              isFocusedReadingMode={isFocusedReadingMode}
              onToggleFocusedReadingMode={(active) => {
                setIsFocusedReadingMode(active !== undefined ? active : !isFocusedReadingMode);
              }}
            />
          )}
          {(activeTab === "comparative_council" || activeTab === "comparative" || activeTab === "qa" || activeTab === "sastrartha") && (
            <ComparativeCouncilFacility
              initialSubTab={comparativeCouncilSubTab}
              comparativePayload={comparativePayload}
              qaPayload={qaPayload}
              onSubTabChange={(subTab) => {
                setComparativeCouncilSubTab(subTab);
                navigateToState({ tab: "comparative_council", subTab });
              }}
            />
          )}
          {activeTab === "translation" && (
            <TranslationUtility
              initialText={translationPayload?.text}
              initialContext={translationPayload?.context}
            />
          )}
          {activeTab === "ocr" && <OcrUtility />}
          {activeTab === "about_us" && (
            <AboutUsFacility onNavigateToTab={handleNavigateToTab} />
          )}
        </div>

        {/* Side Flipping Bar / Drawer for All Tools and Facilities */}
        <SideNavDrawer
          isOpen={isSideNavOpen}
          onClose={() => setIsSideNavOpen(false)}
          activeTab={activeTab}
          onSelectTab={handleNavigateToTab}
          onOpenGlossary={() => setIsGlossaryOpen(true)}
          onSwitchToSimpleVersion={() => handleToggleSiteVersion("simple")}
        />

        {/* Student Terminology Index / Glossary Drawer */}
        <GlossaryDrawer
          isOpen={isGlossaryOpen ? true : undefined}
          onClose={() => setIsGlossaryOpen(false)}
        />

        {/* Academic Footer with Social Media Sharing Option (Hidden in Focused Reading Mode) */}
        {!isMappingFocusActive && (
          <footer className="mt-14 pt-6 border-t border-[#bf953f]/30 space-y-6">
            {/* Social Media Sharing Option in Footer */}
            <FooterSocialShare currentTabName={currentTabFacility?.title || "VedantaTattvam Repository"} />

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex gap-2.5 items-start max-w-3xl">
                <Info className="w-5 h-5 text-[#8c6011] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs text-[#5c4731] leading-relaxed">
                    <strong className="text-[#8c6011]">vedāntatattvaṁ</strong> is dedicated to non-sectarian academic preservation and analysis of Vedantic literature across all classical and regional traditions, preserving the sacred lineages.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#8c6011] font-serif">
                    <button
                      type="button"
                      onClick={() => handleNavigateToTab("about_us")}
                      className="hover:underline font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <span>About Us (Mission & Vision)</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                    <span>•</span>
                    <span className="text-[#6e5842]">Site designed & developed by Buddhodev Ghosh</span>
                    <span>•</span>
                    <span className="text-[#6e5842]">Curated by Dr. Saibal Acharya</span>
                  </div>
                </div>
              </div>
              <div className="text-right text-xs text-[#735d45] font-mono select-none shrink-0">
                © 2026 <span className="text-[#8c6011] font-bold">VedantaTattvam.com</span>
              </div>
            </div>
          </footer>
        )}
      </main>
    </div>
  );
}
