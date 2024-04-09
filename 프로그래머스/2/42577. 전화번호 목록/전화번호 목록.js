function solution(phone_book) {
    phone_book.sort()

    const isPrefix = phone_book.some((book,idx)=>{
        //?를 써서 오류 대신 undefined를 반환
        return phone_book[idx+1]?.indexOf(book) === 0
    })

    return !isPrefix
}   
