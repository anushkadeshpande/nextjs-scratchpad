# Next.js 14

#### To create a new next app:
```npx create-next-app@latest```

### React Server components (RSC):
New architecture by React team in React 18. Two types of components were introduced:
- Server Components:
    -  All components in nextjs are server components
    -  Can read files or interact with db
    -  Cannot use hooks or handle user interaction
- Client Components
    -  Add "use client" at the top of component file
    -  cannot read files, but can handle user interactions

#### File based routing mechanism conventions:
- All routes must be placed in ```app``` folder
- Every file corresponding to a route must be named as ```page.js``` or ```page.tsx```
- Every folder corresponds to a path segment
- To create dynamic routes, create a new folder with name like ```[id]```
    -  These route parameters can be accessed via props 


#### Private Folder:
- Private implementation detail and should not be considered by routing system
- This folder and all its subfolders are excluded from routing
- Prefix folder name with underscore
- Useful to separate UI logic from routing logic
- to include _ in url segments, folder name can be prefixed with "%5F"
