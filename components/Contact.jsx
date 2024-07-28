import { FadeInBottom } from "@/components/Wapper";

export function Contact(){
    return (
        <div className="text-center p-20">
          <FadeInBottom>
            <h4 className="font-bold">お問い合わせ</h4>
             <form>
                <div>
                  <label>お名前</label>
                  <input type='text' placeholder='お名前'></input>
                </div>
                <div>
                  <label>フリガナ</label>
                  <input type='text' placeholder='フリガナ'></input>
                </div>
                <div>
                  <label>郵便番号</label>
                  <input type='text' placeholder='郵便番号'></input>
                </div>
                <div>
                  <label>県・市区町村</label>
                  <input type='text' placeholder='県・市区町村'></input>
                </div>
                <div>
                  <label>番地・建物名</label>
                  <input type='text' placeholder='番地・建物名'></input>
                </div>
                <div>
                  <label>電話番号</label>
                  <input type='text' placeholder='電話番号'></input>
                </div>
                <div>
                  <label>メールアドレス</label>
                  <input type='text' placeholder='メールアドレス'></input>
                </div>
                <div>
                  <label>メールアドレス（確認用）</label>
                  <input type='text' placeholder='メールアドレス（確認用）'></input>
                </div>
                <div>
                  <label>ご用件</label>
                  <input type='text' placeholder='ご用件'></input>
                </div>
                <div>
                  <button type='submit'>送信</button>
                </div>
              </form>
          </FadeInBottom>
      </div>
    );
}