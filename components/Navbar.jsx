
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-between items-center text-white">
        <li>
          <a href="/" className="text-lg font-semibold hover:underline">Kiddospace</a>
        </li>
        {session ? (
          <>
            <li className="font-semibold">Hello, {session.user?.name}</li>
            <li>
              <button
                onClick={() => signOut()}
                className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Sign Out
              </button>
            </li>
          </>
        ) : (
          <li>
            <button
              onClick={() => signIn('google')}
              className="bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500"
            >
              Sign In with Google
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
