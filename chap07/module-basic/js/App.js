const APP_TITLE = 'Vue.jsアプリ';

export function getTriangle(base, height) {
  return base * height / 2;
}

export class Article {
  getAppTitle() {
    return APP_TITLE;
  }
}
