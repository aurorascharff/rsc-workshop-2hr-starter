# Hands-on React Server Components, Server Actions, and Forms in the Next.js App Router

## Introduce Server and Client Components TODO

## Introduce the repository

- This is a starter but its very easy to create a next app following the [docs](https://nextjs.org/docs/app/api-reference/create-next-app). 1 npx command.
- Next.js has lots of stuff like file-based-routing, nested layouts, caching etc. We will focus on the new stuff.
- Talk about eslint and prettier
- Talk about Prisma, seed, explain prisma and README for migrations
- This includes React Compiler for reference

## Code all data fetching

- Write all data fetching functions inside lib/services
- Nevne setup her, kan ha 1 fil for hver “feature” osv, smak og behag
- Nevne server-only
- Fetch data in sidebar
- Fetch data in contact page
- Fetch data in edit contact page
- Show suspense and streaming
- Discuss composability and compare with React Query, mention deduping

## Code client component logic

- Kode search component
- Nevne sidebar og contactButton

## BREAK

## Introduce Server Actions TODO

## Write all Server Actions

- Revalidatepath
- Make all crud work

## Use all server actions

- Action-prop, mention onClick and hydration and web standards
- Mention .bind og hidden inputs
- Progressive enhancement
- Make all the crud work
- Show slow network prog enh search in ikognito waterfall

## Add interactivity with SubmitButton

- Show component and talk about React 19
- Add component to all forms, replace with submitButton

## Use useActionState for form validation

- Add validation to the form with useActionState and Zod, per-field errors coming back
- Mention toast on error or error boundary
- Try without js: disable, delete suspense, then test
- Mention React hook form and other libraries to come
