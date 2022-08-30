class List {}

class Stack extends List {}

/*
<슈퍼클래스를 위임으로 바꾸기>
위의 방식으로 하면 Stack에서 List의 필요한 api 뿐 아니라
불필요한 모든 api가 List를 상속받음으로써 넘어온다 

solution 처럼 Stack 내부적으로 List 인스턴스를 생성해 필요한 api 만 접근하여 사용한다
*/
