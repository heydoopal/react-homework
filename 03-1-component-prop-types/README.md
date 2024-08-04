## 🧩 240804 컴포넌트 속성 검사 및 테스트

- 바닐라 프로젝트 UI 결과물 중 일부를 선별한 후, 리액트를 사용해 컴포넌트로 구현합니다.
- 컴포넌트 구현 과정에서 속성 검사 및 테스트 코드를 작성하는 것이 과제입니다.

  - [ ] 아토믹(atomic) 또는 몰레큘(molecule) 컴포넌트를 작성합니다.
  - [ ] 작성된 컴포넌트는 속성(props) 검사를 포함해야 합니다.
  - [ ] 속성 검사는 prop-types, TypeScript 중 선택하세요.
  - [ ] Vitest를 사용해 컴포넌트 테스트 코드를 작성합니다. (옵션)

  <br>

### 수행 조건

테스트는 다음 조건을 충족해야 합니다.

- [ ] 모두가 접근 가능
- [ ] 의미있는 구조 설계
- [ ] 체계적인 표현 설계

<br>

### 수행 과정 기록

- 기존 아토믹 컴포넌트 과제에서 prop-types를 이용하여 속성검사를 했었기에,
  강사님의 피드백에 대한 개선 및 기존 pureCSS 스타일링 > tailwindCSS로 바꿔보는 작업을 진행하였습니다.

#### 개선 사항

1. 불필요한 <React.Fragment> 제거<br>
   ![](https://velog.velcdn.com/images/zidoopal/post/2920a2cc-684a-4820-9e8d-d608dcb22313/image.png)
   <br>

2. 접근성 이슈- 명도대비 개선

- primary 색상 변경 (#E23E57 ▶ #D83A58)
  <br>

3. unlighthouse 검사 > SEO > meta description 태그가 없다는 경고 문구 확인하여 추가함<br>
   ![](https://velog.velcdn.com/images/zidoopal/post/1c66bb90-ebaa-43bc-a241-ce047854898b/image.png)<br>
   <br>

#### 위 사항들 수정 이후 unlighthouse 성능검사 결과

![](https://velog.velcdn.com/images/zidoopal/post/7b5969eb-9cd6-4f20-a974-6821b53d36df/image.png)

<br>

- 위 사항들 개선 이후, ts로도 바꿔보면 연습이 되고 좋을 것 같아 tsx 파일도 추가해보았습니다.

### 회고

- 내용
