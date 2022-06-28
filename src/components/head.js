import {Link} from "gatsby";
import React from "react"
function Head(){
    return (
        <div style={{display: "flex", gap:10}}>
        <Link href="/">로고</Link>
        <Link href="/about">어바웃</Link>
        <Link href="/test">테스트</Link>
        <Link href="/test-space">테스트 스페이스</Link>
      </div>
    );
}

export default Head;
