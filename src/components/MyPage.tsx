import { useNavigate } from "react-router-dom";
import "./styles/MyPage.css"; // 必要に応じてスタイル追加

const MyPagee = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // ログアウト処理をここに追加
    sessionStorage.removeItem("user"); // セッションストレージからユーザー情報を削除
    alert("ログアウトしました");
    navigate("/"); // ログインページへリダイレクト
  };

  const handleMessageClick = (id: number) => {
    navigate(`/contactDetail?userId=${id}`); // 問い合わせ詳細ページへ遷移
  };

  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + '...' : text
  };
  
  const dummyHistory = [
    { id: 1, title: '配送について', message: '発送完了しました。商品はヤマト運輸で発送されました。' },
    { id: 2, title: '返品について', message: '返品は7日以内であれば可能です。お手数ですが、...' },
  ];
  const user = JSON.parse(sessionStorage.getItem('user') || '{}');
    if (!user || !user.userId) {
        // ユーザーがログインしていない場合はログインページへリダイレクト
        navigate('/');
        return null;
    }

  return (
    <div className="mypage">
      <h2>マイページ</h2>
      <h3>
        <button onClick={handleLogout}>ログアウト</button>
      </h3>
      <button onClick={() => navigate('/contact')}>新しい問い合わせを作成</button>
      <h3>問い合わせ履歴</h3>
      <ul className="history-list">
        {dummyHistory.map((item) => (
          <li className="msgList" key={item.id} onClick={() => handleMessageClick(item.id)}>
            <strong className="msg-title">{item.title}</strong><br />
            <span className="msg-preview">
              {truncateText(item.message, 20)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPagee;