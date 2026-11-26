"use client";

import { useSyncExternalStore } from "react";

export type Tone = "dark" | "light";
export type Skin = "manga" | "synthetica";

type ThemeState = {
    tone: Tone;
    skin: Skin;
};

const TONE_KEY = "theme";
const SKIN_KEY = "skin";

const serverState: ThemeState = { tone: "dark", skin: "manga" };

function readInitialState(): ThemeState {
    if (typeof window === "undefined") return serverState;

    const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)").matches ?? false;
    const savedTone = window.localStorage.getItem(TONE_KEY);
    const tone: Tone = savedTone === "dark" || savedTone === "light"
        ? savedTone
        : prefersLight ? "light" : "dark";

    const skin: Skin = window.localStorage.getItem(SKIN_KEY) === "synthetica"
        ? "synthetica"
        : "manga";

    return { tone: skin === "synthetica" ? "dark" : tone, skin };
}

let state = readInitialState();
const listeners = new Set<() => void>();

function applyToDocument(next: ThemeState) {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.classList.toggle("dark", next.tone === "dark");
    root.classList.toggle("light", next.tone === "light");
    root.classList.toggle("theme-synthetica", next.skin === "synthetica");
}

// Adopt the persisted theme before hydration so neither skin nor tone flashes.
applyToDocument(state);

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

function getSnapshot() {
    return state;
}

function getServerSnapshot() {
    return serverState;
}

function commit(next: ThemeState) {
    state = next;
    applyToDocument(next);
    listeners.forEach((listener) => listener());
}

function persist(key: string, value: string) {
    try {
        window.localStorage.setItem(key, value);
    } catch {
        // Storage can be unavailable (private mode); the in-memory theme still works.
    }
}

export function useTheme() {
    const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    return {
        ...current,

        toggleTone() {
            if (state.skin === "synthetica") return;
            const tone: Tone = state.tone === "dark" ? "light" : "dark";
            commit({ ...state, tone });
            persist(TONE_KEY, tone);
        },

        toggleSkin() {
            const skin: Skin = state.skin === "manga" ? "synthetica" : "manga";
            // Synthetica is dark-only; the manga tone is left stored so it returns on exit.
            const storedTone = window.localStorage.getItem(TONE_KEY);
            const tone: Tone = skin === "synthetica"
                ? "dark"
                : storedTone === "light" ? "light" : "dark";
            commit({ ...state, skin, tone });
            persist(SKIN_KEY, skin);
            if (skin === "manga") persist(TONE_KEY, tone);
        },
    };
}
