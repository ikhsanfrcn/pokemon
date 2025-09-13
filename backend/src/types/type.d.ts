export interface RegisterParams {
  name: string;
  email: string;
  password: string;
}

export interface LoginParams {
  email: string;
  password: string;
}

export interface UserParams {
  name?: string;
}

export interface UpdateUserProfileInput {
  userId: string;
  name: string;
  email: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
  file?: Express.Multer.File;
}
