
# React TypeScript Component Library

## Components

### 1. AlertBox
A reusable alert component.

#### Props:
- type: 'success' | 'error' | 'warning' | 'info'
- message: string
- onClose?: () => void
- children?: ReactNode

#### Usage:
```tsx
<AlertBox type="success" message="Saved!">
  <p>Extra info</p>
</AlertBox>

###User Profile Card
    Display user information

  Props:
user: User
showEmail?: boolean
showRole?: boolean
onEdit?: (id: string) => void
children?: ReactNode



###Usage:
<UserProfileCard user={user} showEmail={true}>
  <p>Last login today</p>
</UserProfileCard>



Reflection question:
Reflection Questions:

How did you handle optional props in your components?

*It is handled using ? in TypeScript or conditional rendring or default value like:

--onClose?: () => void;
--{onClose && <button onClick={onClose}>×</button>}
--showEmail = true
*

What considerations did you make when designing the component interfaces?

**Reusability → generic props like children
Flexibility → optional props (showEmail, onEdit)
Strict typing → union types (AlertType)**


How did you ensure type safety across your components?

Defined interfaces for all props
Used strict types instead of any
Used function typing for callbacks

