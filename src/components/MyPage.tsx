import { useNavigate } from "react-router-dom";
import "./styles/MyPage.css"; // 必要に応じてスタイル追加

const MyPagee = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ログアウト処理をここに追加
    alert("ログアウトしました");
    navigate("/"); // ログインページへリダイレクト
  };
  const dummyHistory = [
    { id: 1, question: '配送について', reply: '発送完了しました。' },
    { id: 2, question: '返品について', reply: '承りました。' },
  ];

  return (
    <div className="mypage">
      <h2>マイページ</h2>
      <h3>
        <button onClick={handleLogout}>ログアウト</button>
      </h3>
      <h3>問い合わせ履歴</h3>
      <ul>
        {dummyHistory.map((item) => (
          <li key={item.id}>
            <strong>{item.question}</strong><br />
            <span>{item.reply}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/contact')}>新しい問い合わせを作成</button>
    </div>
  );
}

export default MyPagee;