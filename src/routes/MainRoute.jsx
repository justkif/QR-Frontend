import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import SideBar from '../layout/SideBar';
import QRPage from '../features/qr/QRPage';
import UpdatePasswordPage from '../features/updatePassword/UpdatePasswordPage';
import AuthorizationRoute from './AuthorizationRoute';
import ScannerPage from '../features/scanner/ScannerPage';
import ManagerPage from '../features/manager/ManagerPage';
import AdminRoute from './AdminRoute';

export default function MainRoute() {
  return (
    <div className='h-screen'>
      <SideBar />
      <Routes>
        <Route index element={<QRPage />} />
        <Route path='password' element={<UpdatePasswordPage />} />
        <Route 
          path='scanner' 
          element={
            <AuthorizationRoute role={['scanner', 'manager', 'admin']}>
              <ScannerPage />
            </AuthorizationRoute>
          } 
        />
        <Route 
          path='manager' 
          element={
            <AuthorizationRoute role={['manager', 'admin']}>
              <ManagerPage />
            </AuthorizationRoute>
          } 
        />
        <Route 
          path='admin/*' 
          element={
            <AuthorizationRoute role={['admin']}>
              <AdminRoute />
            </AuthorizationRoute>
          } 
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Outlet />
    </div>
  );
}
