# Hands-on React Server Components, Server Actions, and Forms in the Next.js App Router

## What are server components?

- Server components are a new feature in React 19, that allows you to run React components on the server. They never re-render, only run once on the server to generate UI. Js never shipped to client.
- Excalidraw: "the server" fullstack framework, rendered in build or request time
- Excalidraw: never hydrated, partially hydrated, exclude js from the client
- Next.js is a React framework that includes server components, server component by default
- Make servercomponents inside /components/intro and give it styles
- ServerComponent console log
- No js in the browser for page.js
- Excalidraw: diagram of server components
- Async and fetch data prisma, data[0]
- Limitations onclick button, we need client for interactivity or browser stuff

## What are client components?

- Normal react components are marked with "use client"
- They are rendered on the server and then hydrated on the client like with normal SSR
- onClick alert, onclick state change
- Console log client
- Page.js has js in the browser
- Excalidraw: show tree and discuss hydration
- Basically, try to put client code in the leaves to optimize performance
- Next.js [docs](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns) client/server components

## Client/server composition

- Now we need to compose them
- Client in server: all good
- Client in client: converted
- Server in client: server becomes client, fails and console.log
- Excalidraw: donut pattern and fetch data again
- Commit code

## Benefits and drawbacks

- Excalidraw: benefits and drawbacks
- Benefits: data fetching, access to backend, caching, bundle size, streaming, DX
- Drawbacks: needs framework like nextjs, complexity, learning curve

## Introduce the repository

- CRUD app for managing contacts
- Talk about eslint and prettier
- Next.js has lots of stuff like file-based-routing, nested layouts, caching etc. We will focus on the new stuff.
- Introduce the structure and the components, all is server right now, loads same contact. Pre-coded because this is just react and html. We want more time for the new stuff.

## Code all data fetching

- Fetch data in contactList: getContacts inside lib/services
- Nevne setup her, kan ha 1 fil for hver “feature” osv, smak og behag
- Nevne server-only
- Fetch data in contact page: getContact inside lib/services
- Fetch data in edit contact page
- Discuss composability and compare with React Query
- Show excalidraw, react cache mention
- Add slow functions
- Show suspense and streaming
- Excalidraw tree

## Code client component logic

- Search component: mention web standard way to search and progressive enhancement already working.
- Kode contact list: extract to property and move await
- Kode contact button: dont need to mark as use client
- Kode search component: preventdefault full page reload, could be a plain filter but we want to use the url, defaultvalue
- Excalidraw tree

## BREAK

## Introduce Server Actions

- Server actions are a new feature in React 19, that allows you to create server code that can be called from the client
- We cant pass functions over the network
- Pages router: you created API endpoints and used for example trpc
- Type safety and creates a hidden api-endpoint
- Excalidraw: "use server" mutateData.ts, back to the server
- Show in code mutdateData getcontact[0].id, use in ClientComponent, show error then no error

## Write and use all server actions, make CRUD work

- Create: action-prop, mention onClick and hydration and web standards, revalidate etter visning
- Update: action-prop, onSubmit, hidden inputs or .bind, add all props prisma
- Delete: action-prop, .bind, then modal. Prog enh fallback.
- Turn off js and show that there is no modal
- Show slow network prog enh search in ikognito waterfall, show modal shows up afterwards

## Add interactivity with SubmitButton

- Use loading boolean for delete button
- The other buttons are not client components
- Add useFormStatus isSubmitting and talk about React 19 availability nextjs
- Use it in new contact
- Power of rsc, composability of client/server while mainaining interactivity
- Add component to update contact

## Use useActionState for form validation

- Whats missing? Validation. We allow empty data but maybe you don't want that. Show invalid image url.
- Don´t trust client input
- Add validation to the form in updateContact.ts, then with useActionState and Zod, use result.data
- Per-field errors coming back
- Move await to page.tsx
- Use errors, then test, then set defaultValue
- Mention ways to use useActionState, toast on error or error boundary, db error
- Mention React hook form and other libraries to come building ontop of this, react query because of hooks

## Final note

- Excalidraw: final trees
- Performant, interactive, prog.enh applications with good developer experience
- There´s a lot I didn't cover today
- React 19 hooks ties it together, and there is alot more to come from these. They will be primitives for libraries simpliying things for developers.
