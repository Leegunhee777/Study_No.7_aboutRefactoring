class Organization {
  #name;
  #country;
  #rawData;
  constructor(data) {
    this.#rawData = data;
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() {
    return this.#name;
  }
  //organization.name = 'Dream Coding';
  //set 을 지워준다면 .name = '...'이런식으로 name값을 변경하고자하는 시도를 차단시킬수있다.
  set name(value) {
    this.#name = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }

  //나중에 get하고 set한 데이터를 외부에 return 해야한다면
  //아래처럼 ...이용한다 why? 객체를 담고있는 변수는 객체의 메모리 주소를 참조하고있으므로,
  //this.#data를 직접 return 하게되면, 해당 메모리의 참조값이 노출되어 캡슐화가 깨지게될수있기때문에 다른 새로운 객체를
  //...를 이용하여 생성해 값을 반환해준다.
  //즉 외부에서 반환된 객체를 수정해도 내가 가지고있는 데이터에는 영향이 가지않게 해줄수있음, 불변성이 유지될수있음!!!!

  //주의!현재코드상 이렇게 반환된 #rawData는  set name과 set country를 통해 변경된 데이터를 반환하지는 않는다!
  //불변성을 설명하기위해 테스트용으로 이렇게 적어놓은것이다
  get rawData() {
    return { ...this.#rawData }; //얉은 복사만된다. lodash에서 cloneDeep을 사용하는게 제대로된 복사가가능하다
  }
}

//다른곳에서 get rawData를 통해 반환받은 값으로
// const instance = new Organizaion({...})
// const data = instance.rawData
// data.name = 'leegun' 이런식으로 name값을 변경하려고해도 우리의 내부 데이터는 영향을 받지 않는다는말이다!

const organization = new Organization({
  name: 'Acme Gooseberries',
  country: 'GB',
});

const instance = organization.rawData;

instance.name = 'dldldldldl';

console.log(instance);
console.log(organization.rawData);

/*
위에서 {...this.#rowData}형식으로 반환하면 위의 콘솔값이 아래보이듯이 내부적인데이터의 불변성이유지되지만
{ name: 'dldldldldl', country: 'GB' }
{ name: 'Acme Gooseberries', country: 'GB' }

...연산자가아닌   return this.#rawData 이런식으로 우리 this.#rawData의 메모리 참조값을 직접적으로 노출시키게되면
instance.name = 'dldldldldl'; 에서 직접노출된 메모리참조값을통해
this.#rawData값이 변경되어 아래처럼 console이 찍힌다 불변성 유지못하게된것임
{ name: 'dldldldldl', country: 'GB' }
{ name: 'dldldldldl', country: 'GB' }
*/
