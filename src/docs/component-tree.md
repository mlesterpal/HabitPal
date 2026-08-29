# Component tree

How screens are nested and what each piece does. Helper files (types, data, date utils) are listed at the end; they are not React components.

## App shell

```
main
 └── Provider (Chakra)
      └── AppRoutes
           └── AdminLayout
                ├── AdminSidebar
                ├── AdminTopNav
                └── page (Outlet)
```

| Name | What it does |
| --- | --- |
| **AppRoutes** | Maps URLs to pages. |
| **AdminLayout** | Shared admin chrome: sidebar, top bar, and the page content. |
| **AdminSidebar** | Links to Dashboard and Habits. On small screens it is a drawer. |
| **AdminTopNav** | Top bar; hamburger opens the drawer on mobile. |

## Dashboard (`/admin/dashboard`)

```
DashboardPage
 └── HabitDashboard
      ├── MonthNavigator
      ├── HabitMonthGrid
      │    ├── HabitGridHeader
      │    └── HabitRow
      │         └── DayCheckCell
      └── NewHabitForm
```

| Name | What it does |
| --- | --- |
| **DashboardPage** | Dashboard route. Renders the habit tracker. |
| **HabitDashboard** | Holds month + habit data. Wires the grid, month arrows, and add-habit. |
| **MonthNavigator** | Previous / next month and the month label. |
| **HabitMonthGrid** | Scrollable month table. |
| **HabitGridHeader** | Column titles: Habits, weekdays, dates, Goal, Achieved. |
| **HabitRow** | One habit: name (Exercise links to the exercise section), day cells, goal, achieved. |
| **DayCheckCell** | One day square. Click to toggle a check. |
| **NewHabitForm** | “+ New Habit” and the name field. |

## Exercise (`/admin/dashboard/exercise`)

```
ExerciseTypesPage
 ├── BackLink
 └── ExerciseTypeCard   (Weight Lifting, Running, Basketball)
```

```
ExerciseTypePage          (Basketball)
 └── BackLink
```

```
RunningPage               /admin/dashboard/exercise/running
 ├── BackLink
 ├── BestRecordBySteps    best minutes at 3k / 4k / 5k steps + date
 └── RunningLog           date, minutes, steps
```

| Name | What it does |
| --- | --- |
| **ExerciseTypesPage** | List of exercise kinds. |
| **ExerciseTypeCard** | One kind. Click opens that kind’s page. |
| **ExerciseTypePage** | Simple page for Basketball. |
| **RunningPage** | Running home. Stats, then the run log. |
| **BestRecordBySteps** | Best time at 3k / 4k / 5k steps, plus the date of that run. |
| **RunningLog** | Each run: date, minutes, steps. Plain text. |
| **BackLink** | Shared “← previous page” link. |

## Weight lifting

```
WeightLiftingPage                    /admin/dashboard/exercise/weight-lifting
 ├── BackLink
 ├── RecentLiftHistory               last 7 days (text, in a row)
 └── MuscleGroupCard                 Chest, Triceps, …

MuscleGroupPage                      /…/weight-lifting/triceps
 ├── BackLink
 └── MusclePartCard                  Long head, Short head, …

MusclePartPage                       /…/weight-lifting/triceps/long-head
 └── BackLink
      (then date, time, weight, note)
```

| Name | What it does |
| --- | --- |
| **WeightLiftingPage** | Lifting home: recent log + muscle cards. |
| **RecentLiftHistory** | Last 7 days: date, then `muscle · part \| kg`, laid out in a row. |
| **MuscleGroupCard** | One muscle group. Click opens its parts. |
| **MuscleGroupPage** | Parts of one muscle (e.g. long head / short head). |
| **MusclePartCard** | One part. Click opens the lift log. |
| **MusclePartPage** | Lifts for that part: date, time, weight, note. |

## Habits (`/admin/habits`)

```
HabitsPage
```

| Name | What it does |
| --- | --- |
| **HabitsPage** | Habits route. Placeholder text for now. |

## Click path (exercise)

Dashboard **Exercise** → types → **Running** (log) or **Weight Lifting** → **Triceps** → **Long head**.

## Not components (data / helpers)

| File | What it does |
| --- | --- |
| `habitDashboard.types.ts` | Habit and month types. |
| `habitMonth.ts` | Month dates, labels, cell size/colors. |
| `initialHabits.ts` | Demo habits for the grid. |
| `exerciseTypes.ts` | Weight lifting / running / basketball. |
| `muscleGroups.ts` | Chest, triceps, parts, and lift URL base. |
| `liftLog.ts` | Demo lifts and “last 7 days” filtering. |
| `runLog.ts` | Demo runs: date, minutes, steps. |
