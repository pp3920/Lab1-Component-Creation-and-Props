
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
