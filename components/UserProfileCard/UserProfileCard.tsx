import React from "react";

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

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail = false,
  showRole = false,
  onEdit,
  children,
}) => {
  return (
    <div
      className="card text-center shadow-sm mx-auto"
      style={{ maxWidth: "320px" }}
    >
      {/* Avatar */}
      <div className="mt-4">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.name}
            className="rounded-circle"
            style={{ width: "80px", height: "80px", objectFit: "cover" }}
          />
        ) : (
          <div
            className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center mx-auto"
            style={{ width: "80px", height: "80px", fontSize: "24px" }}
          >
            {user.name.charAt(0)}
          </div>
        )}
      </div>

      <div className="card-body">
        {/* Name */}
        <h5 className="card-title">{user.name}</h5>

        {/* Email */}
        {showEmail && (
          <p className="card-text text-muted mb-1">{user.email}</p>
        )}

        {/* Role */}
        {showRole && (
          <p className="card-text text-secondary">{user.role}</p>
        )}

        {/* Children */}
        {children && (
          <div className="text-muted small mb-2">{children}</div>
        )}

        {/* Edit Button */}
        {onEdit && (
          <button
            className="btn btn-primary w-100"
            onClick={() => onEdit(user.id)}
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfileCard;