// src/components/LoginPage.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LoginPage.css'; // 必要に応じてスタイル追加

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 仮のバリデーション
    if (credentials.email === '' || credentials.password === '') {
      setError('すべての項目を入力してください。');
      return;
    }

    // 仮の認証処理（成功時にマイページへ遷移）
    if (credentials.email === 'user@example.com' && credentials.password === 'password') {
      navigate('/mypage');
    } else {
      setError('メールアドレスまたはパスワードが違います。');
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