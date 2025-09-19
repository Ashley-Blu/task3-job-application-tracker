// src/utils/localStorage.ts

// USERS
export function saveUser(user: any) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
}

export function getUsers() {
  const data = localStorage.getItem("users");
  return data ? JSON.parse(data) : [];
}

export function getUserByEmail(email: string) {
  const users = getUsers();
  return users.find((u: any) => u.email === email);
}

export function setActiveUser(user: any) {
  localStorage.setItem("activeUser", JSON.stringify(user));
}

export function getActiveUser() {
  const data = localStorage.getItem("activeUser");
  return data ? JSON.parse(data) : null;
}

export function logoutUser() {
  localStorage.removeItem("activeUser");
}

// JOBS
export function saveJob(job: any) {
  const jobs = getJobs();
  jobs.push(job);
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

export function getJobs() {
  const data = localStorage.getItem("jobs");
  return data ? JSON.parse(data) : [];
}

export function getJobById(id: number) {
  const jobs = getJobs();
  return jobs.find((j: any) => j.id === id);
}
