# test-typescript-chrome-extension

## Description

- This is a test for a Chrome extension written in TypeScript. It uses Webpack to bundle the TypeScript code and the manifest file into a single JavaScript file.

- 타입스크립트로 크롬 확장 프로그램을 만들기 테스트. 웹팩을 사용하여 타입스크립트 코드와 manifest 파일을 단일 자바스크립트 파일로 번들링합니다.

## 참고 자료

- https://betterprogramming.pub/creating-chrome-extensions-with-typescript-914873467b65

## But

- 에러 발생함
- 디버깅이 불편함
- 실제로 실행할 때는 js로 실행되기 때문에 디버깅 불편함
- 간단한거 만들 때는 그냥 js로 만드는게 편할 듯
- 그래도 ts로 만들면, 디버깅할 일이 현저하게 줄어들지 않을까...?
- 에러 디버깅 완료

## How to use

- npm run build
- 크롬에서 확장 프로그램 관리 페이지로 이동
- 개발자 모드 활성화
- 압축해제된 확장 프로그램을 로드 버튼을 클릭
- dist 폴더를 선택
