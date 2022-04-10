<template>
  <div class="Signin">
    <h3>ログインページ（ダミー）</h3>
    <div>
      初回だけ、このページが表示され、自動的に認証が行われます。<br />
      2回目以降は、直接Aboutページに移動します。<br />
      ブラウザーを閉じて、再度アクセスすると、このページが表示されます。
    </div>
  </div>
</template>

<script>
export default {
  name: 'signin',
  created() {
    // 認証済であることを記録（ダミー）
    sessionStorage['authed'] = 1;
  }
}
</script>
