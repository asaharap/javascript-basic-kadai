const date1 = new Date();

// 年、月、日を個別に取得
const year = date1.getFullYear();
const month = date1.getMonth() + 1; // 月は0から始まるため+1が必要
const day = date1.getDate();

// フォーマットを整形
const formattedDate = `${year}年${month}月${day}日`;

// コンソールに出力
console.log(formattedDate);