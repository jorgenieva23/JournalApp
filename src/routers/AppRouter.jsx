import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { login } from "../action/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AuthRouters } from "./AuthRouters";
import { JournalScreen } from "../components/jounal/JournalScreen";
import { startLoadingNotes } from "../action/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        dispatch(startLoadingNotes(user.uid));
      }
      setChecking(false);
    });
  }, [dispatch]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <div className="">
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <AuthRouters />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
