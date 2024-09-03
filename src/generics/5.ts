export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type userRoles = Record<UserRole, string>;

const RoleDescription: userRoles = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
