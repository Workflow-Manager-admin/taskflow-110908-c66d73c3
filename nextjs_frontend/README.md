# Taskify (Next.js + Supabase)

This is a minimal, clean fullstack task app built with Next.js (App Router) and Tailwind CSS, using Supabase directly for all database operations (CRUD). There is **no custom backend container**: all API+data logic is handled by Supabase's managed backend, via its RESTful API and JavaScript SDK.

## Why is there no custom backend?

- **Supabase is a BaaS (backend-as-a-service)** providing database, API endpoints, and authentication out-of-the-box. For CRUD task management, its direct API is sufficient for most use cases.
- **All backend logic is hosted on Supabase**. The app uses the [@supabase/supabase-js](https://supabase.com/docs/reference/javascript) SDK to interact with the "tasks" table for CRUD.
- **If advanced business logic, security, or third-party integrations were needed**, you could add a custom backend container exposing its own API. For Taskify, all "backend" requirements are met by Supabase, so only a frontend project is needed.

## Supabase Table Setup

Make sure your Supabase project has this table:

```
CREATE TABLE tasks (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  title text NOT NULL,
  is_complete boolean DEFAULT FALSE,
  due_date date
);
```

On Supabase's dashboard, enable Row Level Security and allow read/write for public users.

## Environment Variables

Copy `.env.example` to `.env.local` and set your Supabase project credentials:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_KEY=your-supabase-anon-key
```

## Features

- Display all tasks on homepage
- Add new task (title, optional due date)
- Edit task title/due date inline
- Mark complete/incomplete via checkbox
- Delete task
- Sort by due date or completed status
- Fully responsive, minimal Tailwind UI
- All CRUD via direct Supabase API calls

## Running locally

1. Install deps: `npm install`
2. Copy `.env.example` to `.env.local`, set credentials
3. Start dev server: `npm run dev`


---
For more advanced logic or to require a dedicated API/backend, add a Next.js API route or a backend container as needed.
