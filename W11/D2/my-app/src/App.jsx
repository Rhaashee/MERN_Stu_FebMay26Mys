import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { NestedRouter } from "./components/P1";
import { DynamicParamsUseParams } from "./components/P2";
import { MultipleDynamicParams } from "./components/P3";
import { OptionalParam } from "./components/P4";
import { NestedDynamicRoutes } from "./components/P5";
import './App.css'

function DashboardHome() {
  return (
    <div>
      <h3>Dashboard Home</h3>
      <p>Default Dashboard page</p>
    </div>
  )
}

function DashboardProfile() {
  return (
    <div>
      <h3>Dashboard Profile</h3>
      <p>Profile page inside Dashboard</p>
    </div>
  )
}

function DashboardSettings() {
  return (
    <div>
      <h3>Dashboard Settings</h3>
      <p>Settings page inside Dashboard</p>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>React Router concepts</h1>
      <ul>
        <li> NestedRouter</li>
        <li> DynamicParamsUseParams</li>
        <li> MultipleDynamicParams</li>
        <li> OptionalParam</li>
        <li> NestedDynamicRoutes</li>
      </ul>
      <nav style={styles.nav}>
        <Link to="/dashboard">Nested Routes</Link>
        <Link to="/products/101">Dynamic Params</Link>
        <Link to="/users/101/orders/5001">Multiple parameters</Link>
        <Link to="/profile">Optional Params</Link>
        <Link to="/profile/rhaashee">Optional Params with value</Link>
        <Link to="/courses/reactJs">Nested Dynamic Routes</Link>
      </nav>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        {/* NestedRoute */}
        <Route
          path="/dashboard"
          element={<NestedRouter />}
        >
          {/* Index root */}
          <Route
            index
            element={<DashboardHome />}
          />
          {/*  */}
          <Route
            path="profile"
            element={<DashboardProfile />}
          />
          {/*  */}
          <Route
            path="settings"
            element={<DashboardSettings />}
          />
        </Route>
        
        {/* Dynamic Params */}
        <Route
          path="/products/:id"
          element={<DynamicParamsUseParams />}
        />
        {/* MultipleDynamicParams*/}
        <Route
          path="/users/:userId/orderId"
          element={<MultipleDynamicParams />}
        />
        {/* OptionalParam*/}
        <Route
          path="/profile"
          element={<OptionalParam />}
        />
        {/* OptionalParam*/}
        <Route
          path="/profile/:username"
          element={<OptionalParam />}
        />
        {/* Nested Dynamic Param*/}
        <Route
          path="/courses/:courseId"
          element={<NestedDynamicRoutes />}
        />
      </Routes>
    </BrowserRouter>
  )
}

const styles = {
  nav: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px"
  }
}
export default App