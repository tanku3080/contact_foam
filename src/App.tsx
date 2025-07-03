import {useState,ChangeEvent,FormEvent} from 'react';
import './App.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 仮で送信した事にする
    alert('フォームデータ:' + JSON.stringify(formData, null, 2));
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          問い合わせフォーム
        </p>
      </header>
      <div className="App-content">
        <p>以下のフォームに必要事項を入力してください。</p>
        <form className='form-container' onSubmit={handleSubmit}>
          <label>
            <p>名前:</p>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <br />
          <label>
            メールアドレス:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required/>
          </label>
          <br />
          <label>
            問い合わせ内容:
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
          </label>
          <br />
          <button type="submit">送信</button>
        </form>
      </div>
    </div>
  );
}

export default App;
