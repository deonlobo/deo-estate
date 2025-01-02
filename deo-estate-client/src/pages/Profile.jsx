import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div class="max-w-lg mx-auto p-5">
      <h1 class="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="profile"
          class="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <input
          type="text"
          placeholder="username"
          class="border p-3 rounded-lg-2"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          class="border p-3 rounded-lg-2"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          class="border p-3 rounded-lg-2"
          id="password"
        />
        <button class="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
