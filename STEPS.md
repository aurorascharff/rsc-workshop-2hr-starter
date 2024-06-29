# Hands-on React Server Components, Server Actions, and Forms in the Next.js App Router

## Preperation

- Download starter repo, make new repo and first commit during workshop
- Prepare excalidraw and Next.js docs: create-next-app and composition patterns
- Extend the attendee's screen to my mini-screen during slides
- During coding, mirror my screen to the big screen, then extend to the mini screen with my repo and STEPS.md file. Split screen code/ikognito main display, excali/docs second.
- Seed db
- Write comments as I'm coding
- Commit after each step

## What are server components?

- Server components are a new feature in React 19, that allows you to run React components on the server. They never re-render, only run once on the server.
- Excalidraw: Rendered in build or request time
- Excalidraw: never hydrated, partially hydrated, exclude js from the client
- Next.js is a React framework that includes server components, server component by default
- Excalidraw: diagram of server components
- Make servercomponents inside /components/intro and give it styles
- ServerComponent console log
- No js in the browser for page.js
- Async and fetch data prisma, data[0]
- Limitations onclick button, we need client for interactivity

## What are client components?

- Normal react components are marked with "use client"
- They are rendered on the server and then hydrated on the client like with normal SSR
- onClick alert, onclick state change
- Console log client
- Excalidraw: show tree and discuss hydration

## Client/server composition

- Basically, try to put client code in the leaves to optimize performance
- Next.js [docs](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns
) client/server components
- Now we need to compose them
- Client in server: all good
- Server in client: server becomes client, fails and console.log
- Excalidraw: donut pattern and fetch data again
- Commit code

## Benefits and drawbacks

- Benefits: data fetching, access to backend, caching, bundle size, streaming, DX
- Drawbacks: needs framework like nextjs, complexity, learning curve

## Introduce the repository

- CRUD app for managing contacts
- This is a starter but its very easy to create a next app following the [docs](https://nextjs.org/docs/app/api-reference/create-next-app). 1 npx command.
- Talk about eslint and prettier
- Talk about Prisma, seed, explain prisma and README for migrations
- Next.js has lots of stuff like file-based-routing, nested layouts, caching etc. We will focus on the new stuff.
- Introduce the structure and the components, all is server right now, loads same contact. Pre-coded because this is just react and html. We want more time for the new stuff.

## Code all data fetching

- Nevne setup her, kan ha 1 fil for hver “feature” osv, smak og behag
- Nevne server-only
- Fetch data in contactList: getContacts inside lib/services
- Fetch data in contact page: getContact inside lib/services
- Fetch data in edit contact page
- Discuss composability and compare with React Query
- Show excalidraw, react cache mention
- Add slow functions
- Show suspense and streaming

## Code client component logic

- Vise excalidraw tree
- Search component: mention web standard way to search and progressive enhancement already working.
- Kode contact list: extract to property and move await
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

## Write and use all server actions, make CRUD work

- Create: action-prop, mention onClick and hydration and web standards, progressive enhancement
- Update: action-prop, hidden inputs or .bind
- Delete: action-prop, .bind, modal hvis tid. Prog enh fallback.
- Show slow network prog enh search in ikognito waterfall

## Add interactivity with SubmitButton

- Add useFormStatus isSubmitting and talk about React 19
- Add component to all forms, replace button with submitButton

## Use useActionState for form validation

- Add validation to the form with useActionState and Zod, per-field errors coming back
- Mention toast on error or error boundary
- Try without js: disable, delete suspense, then test
- Mention React hook form and other libraries to come building ontop of this
