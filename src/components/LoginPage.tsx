// src/components/LoginPage.tsx
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css'; // 必要に応じてスタイル追加

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // ページがロードされたときにセッションストレージからユーザー情報を取得
        const user = JSON.parse(sessionStorage.getItem('user') || '{}');
        if (user && user.userId) {
            // ユーザーがログインしている場合はマイページへリダイレクト
            navigate('/mypage');
        }
    }, [navigate]);
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    
    const [error, setError] = useState('');
    // 仮のユーザーデータ
    // 実際のアプリケーションでは、APIから取得するか、データベースに保存する必要があります。
    // ここでは、簡単なログイン機能を実装するために、ハードコードされたユーザーデータを使用します。
    // 注意: 実際のアプリケーションでは、パスワードはハッシュ化して保存する必要があります。
    // また、セキュリティのために、ログイン情報はサーバーサイドで検証する必要があります。
    // このコードは、フロントエンドの学習目的であり、セキュリティ上のベストプラクティスに従っていません。
    const mockUsers = [
      {
          userId: 1,
          userName: 'タンク 太郎',
          userEmail: 'tankuman@gmail.com',
          userPassword: 'Tanku3080'
      },
      {
          userId: 2,
          userName: '佐藤 花子',
          userEmail: 'sato@gmail.com',
          userPassword: 'test001'
      }
   ];
   
   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError('');
   };
   const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const foundUser = mockUsers.find(
        user =>
            user.userEmail === credentials.email &&
        user.userPassword === credentials.password
    );
    
    if (foundUser) {
        sessionStorage.setItem('user', JSON.stringify(foundUser));
        navigate('/mypage');
    } else {
        setError('メールアドレスまたはパスワードが間違っています。');
    }
};

  return (
    <div className="login-page">
      <h2>ログイン</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          メールアドレス:
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          パスワード:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default LoginPage;