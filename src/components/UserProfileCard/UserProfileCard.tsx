// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

function UserProfileCard({ user, showEmail, showRole}:UserProfileCardProps){

  return (
    <>
    <div className="user-profile">
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.role}</p>
    </div>
    </>
  )
}

export default UserProfileCard;