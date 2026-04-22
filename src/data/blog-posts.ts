export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-app-router-server-components-guide",
    title: "Next.js App Router & Server Components: A Practical Guide for Frontend Developers",
    excerpt:
      "React Server Components combined with the Next.js App Router are reshaping how we think about frontend architecture. Here's everything you need to know to use them effectively in production.",
    date: "2025-02-10",
    readTime: 7,
    tags: ["Next.js", "React", "Server Components", "App Router", "Performance"],
    content: `
## What Are React Server Components?

React Server Components (RSC) are components that render exclusively on the server. Unlike traditional React components, they never ship JavaScript to the client — which means your bundle stays small and your page loads fast.

Next.js was one of the first frameworks to bring RSC into production through the **App Router**, introduced in Next.js 13 and stabilized in version 14+.

## Why This Matters for Frontend Developers

Before RSC, fetching data on the server required either getServerSideProps (Pages Router) or client-side hooks like SWR or React Query. Both approaches have trade-offs: either you're blocking the whole page, or you're shipping extra JavaScript to handle loading states.

Server Components solve this cleanly:

- **Zero bundle cost** — server-only code never reaches the browser
- **Direct data access** — query your database or API directly inside the component
- **Streaming** — Next.js can send HTML to the browser progressively using React's Suspense

## Server vs Client Components

The key mental model is simple: by default, everything in the \`app/\` directory is a **Server Component**. To opt into client-side interactivity, you add the \`"use client"\` directive at the top of a file.

\`\`\`tsx
// Server Component — no directive needed
async function UserProfile({ id }: { id: string }) {
  const user = await db.users.findById(id); // direct DB call, no API needed
  return <h1>Hello, {user.name}</h1>;
}
\`\`\`

\`\`\`tsx
"use client"; // Client Component

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
\`\`\`

## When to Use Each

**Use Server Components when:**
- Fetching data (from a database, API, CMS)
- Rendering static or mostly-static content
- Working with secrets (API keys, tokens) that shouldn't reach the client
- Improving Core Web Vitals — especially LCP

**Use Client Components when:**
- Using React hooks (useState, useEffect, useContext)
- Handling browser events and interactivity
- Using browser-only APIs (localStorage, window, etc.)
- Working with third-party libraries that require DOM access

## A Real-World Pattern: The Data Fetching Tree

One pattern I've found powerful in production is composing Server and Client components together:

\`\`\`tsx
// Server Component — fetches data
async function ProjectsPage() {
  const projects = await fetchProjects();
  return <ProjectList projects={projects} />;  // Client Component for interactivity
}
\`\`\`

The server renders the data, the client handles the UX. Clean separation.

## Performance Impact

In my work on projects like SliceGames.io, switching to RSC-first architecture reduced Time to First Byte (TTFB) significantly and improved Core Web Vitals scores — which directly translates to better SEO rankings.

The takeaway: if you're building a Next.js app in 2025 and not leveraging Server Components, you're leaving significant performance on the table.

## Getting Started

1. Use the App Router (\`app/\` directory) — it's stable and the future of Next.js
2. Default to Server Components; add \`"use client"\` only when you need it
3. Use Suspense boundaries to stream non-critical UI
4. Pair with the \`cache()\` function or \`unstable_cache\` for intelligent data memoization

Server Components aren't just a new API — they're a new mental model for splitting your application. Once it clicks, you'll wonder how you shipped without them.
    `.trim(),
  },
  {
    slug: "state-management-zustand-vs-pinia-2025",
    title: "State Management in 2025: Zustand vs Pinia — Which One Should You Choose?",
    excerpt:
      "After using Vuex, Pinia, and Zustand across multiple production codebases — from 80M-user government platforms to personal projects — here's my honest take on when and why to choose each.",
    date: "2025-03-05",
    readTime: 8,
    tags: ["Zustand", "Pinia", "Vuex", "State Management", "React", "Vue"],
    content: `
## The State Management Landscape in 2025

State management used to be complicated. Redux with its boilerplate, Vuex with its verbose mutations — both solved real problems, but at a real cost in developer experience.

In 2025, the landscape is cleaner:

- **React ecosystem** → Zustand (and Jotai, Valtio for atomic patterns)
- **Vue ecosystem** → Pinia (Vuex is now officially deprecated)
- **Server state** → TanStack Query (formerly React Query) for both

Having worked with Vuex and Pinia on a large-scale government healthcare platform, and Zustand on personal and collaborative React projects, I want to give you a practical, opinionated comparison.

## Zustand (React)

Zustand is the simplest global state solution I've used. No providers, no reducers, no action types — just a store and a hook.

\`\`\`ts
import { create } from "zustand";

interface AuthStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

const useAuth = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));
\`\`\`

That's it. No boilerplate. No wrapping your tree in a Provider (unless you need it for SSR). You subscribe to exactly the slice of state you need, which means minimal re-renders.

**Zustand strengths:**
- Minimal API — incredibly fast to learn
- Zero boilerplate compared to Redux
- Excellent performance through fine-grained subscriptions
- Works naturally with TypeScript
- Great middleware ecosystem (devtools, persist, immer)

**Zustand weaknesses:**
- No built-in Vue-style reactivity — you have to be explicit about what updates
- Less convention = more decisions for large teams

## Pinia (Vue)

Pinia is the official state management library for Vue 3. It feels like a natural extension of Vue's Composition API.

\`\`\`ts
import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => !!user.value);

  function setUser(newUser: User) {
    user.value = newUser;
  }

  return { user, isLoggedIn, setUser };
});
\`\`\`

Pinia's Composition API style (shown above) feels completely native if you already write Vue 3 with \`<script setup>\`. You get Vue's reactivity system out of the box — everything just works.

**Pinia strengths:**
- First-class TypeScript and DevTools support
- Feels like writing Vue — no mental context switch
- Built-in hot module replacement
- SSR-friendly by design (Nuxt integration is excellent)
- Stores can import each other without circular dependency issues

**Pinia weaknesses:**
- Vue-only (obviously)
- Slightly more opinionated structure than Zustand

## Vuex vs Pinia — Why Pinia Won

On the government healthcare platform I worked on for 3 years, we used Vuex. Mutations, actions, getters, namespaced modules — it worked, but it was verbose. Every state change required a mutation; every async operation required an action that committed a mutation.

Pinia eliminates this entirely. There are no mutations — you just set state directly. The result is roughly 50% less code for the same logic.

If you're starting a new Vue 3 project today, there's no reason to use Vuex.

## The Right Tool for Each Situation

| Scenario | Recommendation |
|---|---|
| New React project | Zustand (client state) + TanStack Query (server state) |
| New Vue / Nuxt project | Pinia (client state) + TanStack Query |
| Simple local state | useState / ref — no library needed |
| Large React app with complex state | Zustand with devtools + immer middleware |
| Complex forms | React Hook Form or Vee-Validate — not a state manager |

## My Honest Take

After using all of them in production: **simplicity wins**. The projects I've seen fail at state management didn't fail because they chose the wrong library — they failed because they put everything into global state when it could have stayed local.

Start simple. useState/ref first. Lift state up when you need to share it. Reach for Zustand or Pinia when component tree lifting gets painful. Use TanStack Query for anything that comes from a server.

That mental model has served me well across every project I've shipped.
    `.trim(),
  },
];
