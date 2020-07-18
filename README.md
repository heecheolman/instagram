# Instagram 으로 React 배우기

인스타그램을 React 로 구현하며 Hooks API 를 사용했으며, Atomic Design 을 이용해 컴포넌트들을 설계했습니다.

## 설명

### React Hooks

React Hooks 는 리액트의 함수형 컴포넌트를 사용하며 함수형 컴포넌트에서의 상태 관리와 React 의 기능들을 사용할 수 있게 해주는 API 입니다. Hooks 가 등장한 이유는 [다음 글](https://www.heecheolman.dev/post/why-hooks)에서 확인할 수 있습니다.

### Atomic Design

아토믹 디자인(Atomic Design) 은 컴포넌트의 설계 기법 중 하나이며 컴포넌트를 구성할 때 다음의 단계로 구분하여 개발합니다.

- Atoms(원자)
- Molecules(분자)
- Organisms(유기체)
- Templates(템플릿)
- Pages(페이지)

**원자(Atoms)** 단위는 Button, Input 등과 같은 가장 기본이 되는 요소이며 보통 Tag 단위로 나뉩니다.

**분자(Molecules)** 단위는 SearchInput (Input + Button) 과 같이 특정 기능을 하는 단위로 구성됩니다.

**Organisms(유기체)** 단위는 Gnb 와 같이 여러 분자 및 원자들이 합쳐진 형태입니다.

**Templates(템플릿)** 은 어떤 레이아웃이 적용될 것인지 선택합니다. 템플릿에는 각 유기체, 분자, 원자들이 어떤 위치에 있어야할지 알고 있습니다.

**Pages(페이지)** 는 템플릿을 보여주는 역할을 하며 페이지 구성에 필요한 데이터들을 가지고 있으며 템플릿, 유기체, 분자, 원자가 표현하는데 필요한 값(Props)들을 내려주게 됩니다. 이를 Prop Drilling 이라 합니다.

> 이 외에 적용되는 것들이 있다면 계속 추가할 예정입니다.

## 스크린샷

![이미지](https://user-images.githubusercontent.com/35059687/87854913-0368fc00-c950-11ea-8103-7f282e848bf3.png)
