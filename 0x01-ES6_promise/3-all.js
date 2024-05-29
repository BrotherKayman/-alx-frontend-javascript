import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const value = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  } catch {
    return console.log('Signup system offline');
  }
}
