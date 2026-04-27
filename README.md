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
