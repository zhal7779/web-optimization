import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//코드 스플리팅 : 번들을 한 번에 다 불러오는게 아니라 쪼개서 불러옴
//lazy를 이용해서 동적으로 컴포넌트 임포트
// 각 페이지에 접근할 때마다 그에 해당하는 번들을 불러오기 때문에 로드 속도 감소
const ListPage = lazy(() => import("./pages/ListPage/index"));
const ViewPage = lazy(() => import("./pages/ViewPage/index"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" component={ListPage} exact />
          <Route path="/view/:id" component={ViewPage} exact />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
