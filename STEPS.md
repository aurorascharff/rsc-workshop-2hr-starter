# Hands-on React Server Components, Server Actions, and Forms in the Next.js App Router

## Introduce Server and Client Components

- App and code in ikognito seperate window, split screen
- Prepare excalidraw and Next.js docs
- Not really meant for code a long but feel to try as I go
- Seed db
- Make components inside /components/intro and give them styles

## What are server components?

- Server components are a new feature in React 19, that allows you to run React components on the server. They never re-render, only run once on the server.
- Nextjs server component by default
- ServerComponent console log
- No js in the browser for page.js
- Excalidraw: diagram of server components
- Excalidraw: Rendered in build or request time
- Excalidraw: never hydrated, partially hydrated, exclude js from the client
- Async and fetch data prisma
- Limitations onclick button, we need client for interactivite

## What are client components?

- Normal react components are marked with "use client"
- They are rendered on the server and then hydrated on the client like with normal SSR
- onClick alert, onclick state change
- Console log client
- Excalidraw: show tree
- Next.js [docs](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
) client/server components

## Client/server composition

- Basically, try to put client code in the leaves to optimize performance
- Now we need to compose them
- Client in server: all good
- Server in client: server becomes client
- Excalidraw: donut pattern
- Commit code

## Benefits and drawbacks

- Benefits: data fetching, access to backend, caching, bundle size, streaming, DX
- Drawbacks: needs framework like nextjs, complexity, learning curve

## Introduce the repository

- CRUD app for managing contacts
- This is a starter but its very easy to create a next app following the [docs](https://nextjs.org/docs/app/api-reference/create-next-app). 1 npx command.
- Talk about eslint and prettier
- Talk about Prisma, seed, explain prisma and README for migrations
- This includes React Compiler for reference
- Next.js has lots of stuff like file-based-routing, nested layouts, caching etc. We will focus on the new stuff.
- Introduce the structure and the components, all is server right now, loads same contact

## Code all data fetching

- Write all data fetching functions inside lib/services
- Nevne setup her, kan ha 1 fil for hver “feature” osv, smak og behag
- Nevne server-only
- Fetch data in sidebar
- Fetch data in contact page
- Fetch data in edit contact page
- Discuss composability and compare with React Query
- Add slow functions
- Show suspense and streaming

## Code client component logic

- Search component: mention web standard way to search and progressive enhancement already working.
- Kode contact list
- Kode contact button: dont need to mark as use client
- Kode search component
- Vise excalidraw tree

## BREAK

## Introduce Server Actions

- Server actions are a new feature in React 19, that allows you to create server code that can be called from the client
- Pages router: you created API endpoints and used for example trpc
- We cant pass functions over the network
- Type safety and creates a hidden api-endpoint
- "use server" mutateData.ts
- Excalidraw: back to the server

## Write all Server Actions

- Create, delete
- Update: simple version without validation
- revalidatePath

## Use all server actions

- Action-prop, mention onClick and hydration and web standards
- Mention .bind og hidden inputs
- Progressive enhancement
- Make all the crud work
- Show slow network prog enh search in ikognito waterfall

## Add interactivity with SubmitButton

- Add useFormStatus isSubmitting and talk about React 19
- Add component to all forms, replace button with submitButton

## Use useActionState for form validation

- Add validation to the form with useActionState and Zod, per-field errors coming back
- Mention toast on error or error boundary
- Try without js: disable, delete suspense, then test
- Mention React hook form and other libraries to come
