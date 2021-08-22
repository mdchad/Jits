import { post } from './fetch';

export class AuthClient {
  constructor() {
    this.authToken = null;
    this.user = null;
  }
  async signIn(formData) {
    try {
      const data = await post(`http://localhost:3001/v1/auth/login`, {
        ...formData,
      });
      this.authToken = data.tokens.access.token;
      this.user = data.user;
      return { data, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error };
    }
  }

  async signOut(refreshToken) {
    try {
      const data = await post(`http://localhost:3001/v1/auth/logout`, {
        refreshToken,
      });
      return { data, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error };
    }
  }

  async signUp(formData) {
    try {
      const data = await post(`http://localhost:3001/v1/auth/logout`, {
        ...formData,
      });
      return { data, error: null };
    } catch (error) {
      console.log(error);
      return { data: null, error };
    }
  }

  async session() {
    return this.authToken;
  }

  async getUser() {
    return this.user;
  }
}
