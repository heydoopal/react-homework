## 🧩 240728 아토믹 컴포넌트 과제

- 바닐라 프로젝트 결과물에서 구현할 컴포넌트를 1개 선정 및 Figma를 사용해 선정한 컴포넌트 정의 및 변형을 설계합니다.
- 디자인된 컴포넌트를 React 컴포넌트로 구현합니다.
  <br>

### 수행 조건

테스트는 다음 조건을 충족해야 합니다.

- [ ] 모두가 접근 가능
- [ ] 의미있는 구조 설계
- [ ] 체계적인 표현 설계

<br>

### 수행 과정 기록

[💡 피그마 시안 링크](https://www.figma.com/design/Vx9F8hszxUxcexVN0NTHNJ/%EC%95%84%ED%86%A0%EB%AF%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%BC%EC%A0%9C_%EC%A7%80%EC%9C%A0%EC%A7%84?node-id=0-1&t=kFQzrQChZkk0340v-1)

![](https://velog.velcdn.com/images/zidoopal/post/a2532c62-42e7-4f2c-b7ec-32abba139ca3/image.png)

- 컴포넌트 구현 대상 : **버튼 컴포넌트**
- 컴포넌트 설계

  - 피그마에 대한 이해도가 매우 부족한 상태입니다. 😞 기존 피그마 시안에 있던 버튼 컴포넌트를 그대로 가져다 쓰려다, 연습 삼아 직접 컴포넌트를 만들어보며 피그마와 최대한 익숙해져보려 노력했습니다..😶
  - properties 구분:
    - 스타일 outlined / filled<br>
    - 사이즈 large / small<br>
      ![](https://velog.velcdn.com/images/zidoopal/post/52207429-4cb3-4069-8bfa-5be851c212c6/image.png)<br>

- **장바구니 모달 컴포넌트** 에 '버튼 컴포넌트' 추가(import)하기 <br>
  ![](https://velog.velcdn.com/images/zidoopal/post/e5aafa27-3d01-4bbf-9095-0782fd22da66/image.png)<br>
  - 해당 모달에 stepper 컴포넌트도 들어가게되어 stepper도 리액트 컴포넌트로 변경해보았습니다.

### 회고

- 피그마도, vite를 사용한 환경 구성 부분도 너무 생소하고 어렵게 느껴져, vite 환경 구성 없이 배운 내용만 활용하여 과제를 하려했는데, pure CSS 를 import 하는 중 다음과 같은 오류가 계속 발생하여 모듈 번들러가 필요하다는 내용인 것 같아 결국 vite와 함께 과제를 수행하였습니다..🤔
  ![](https://velog.velcdn.com/images/zidoopal/post/9fb4b6ff-f5fe-4da5-ad54-9c6dfb34994a/image.png)
- 복습을 게을리 했더니 벌써 여파가 큰 것 같습니다. 반성하고 지금부터라도 복습을 충실히 해야겠습니다
- 과제 수행 중 시간이 부족하여 리드미 파일 작성 미완료 상태이나, 일단 upload 먼저 진행하였습니다...😥
