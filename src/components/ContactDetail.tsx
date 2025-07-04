import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface ContactDetailData {
  title: string;
  message: string;
}

const mockDetailData: Record<number, ContactDetailData> = {
  1: { title: '配送について', message: 'ご注文の商品は発送されました。追跡番号はxxxxxです。' },
  2: { title: '返品について', message: '返品手続き完了しました。返送方法は以下の通りです。' },
  3: { title: '支払い変更', message: '支払い方法の変更はマイページから可能です。' }
};

const ContactDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [detail, setDetail] = useState<ContactDetailData | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userId = Number(params.get('userId'));
    const data = mockDetailData[userId];
    setDetail(data ?? null);
  }, [location.search]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      {detail ? (
        <>
          <h2>{detail.title}</h2>
          <p>{detail.message}</p>
          <button onClick={() => navigate('/mypage')}>← 戻る</button>
        </>
      ) : (
        <p>該当データが見つかりません。</p>
      )}
    </div>
  );
};

export default ContactDetail;
