import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

@Injectable()
export class DataProvider {
  constructor(public http:Http, public db:AngularFireDatabase) {
  }
  
  sampleFactories(){
    let factories = [];
    let lines = [];
    let lines2 = [];

    let processes1 = [{
      p_code: 1,
      p_name: '설비제어',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 2,
      p_name: 'line1p1p2',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 3,
      p_name: '렉킹',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 4,
      p_name: 'line1p2p3',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 5,
      p_name: '탈지',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 6,
      p_name: 'line1p3p4',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 7,
      p_name: '에칭',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 8,
      p_name: 'line1p4p5',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 9,
      p_name: '중화',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 10,
      p_name: 'line1p5p6',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 11,
      p_name: '활성1',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 12,
      p_name: 'line1p6p7',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 13,
      p_name: '활성2',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 14,
      p_name: 'line1p7p8',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 15,
      p_name: '화학니켈',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 16,
      p_name: 'line1p8p9',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 17,
      p_name: '치환동',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 18,
      p_name: 'line1p9end',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, ];

    let processes2 = [{
      p_code: 1,
      p_name: '유산동',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 2,
      p_name: 'line1p1p2',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 3,
      p_name: '반광택',
      description: '설명',
      pro_code: '제품 번호',
      p_error: true,
      l_code: 1
    }, {
      p_code: 4,
      p_name: 'line1p2p3',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 5,
      p_name: '광택',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 6,
      p_name: 'line1p3p4',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 7,
      p_name: '사틴',
      description: '설명',
      pro_code: '제품 번호',
      p_error: true,
      l_code: 1
    }, {
      p_code: 8,
      p_name: 'line1p4p5',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 9,
      p_name: 'MP니켈',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 10,
      p_name: 'line1p5p6',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 11,
      p_name: '크롬',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 12,
      p_name: 'line1p6p7',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 13,
      p_name: '도금완료',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 14,
      p_name: 'line1p7p8',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }, {
      p_code: 15,
      p_name: '디렉킹',
      description: '설명',
      pro_code: '제품 번호',
      p_error: true,
      l_code: 1
    }, {
      p_code: 16,
      p_name: 'line1p8end',
      description: '설명',
      pro_code: '제품 번호',
      p_error: false,
      l_code: 1
    }]

    let product1 = {
      name: '철',
      stock_amount: 20,
      limit: 40,
      p_factory: "Factory 1",
      p_line: 1,
    }
    let product2 = {
      name: '금',
      stock_amount: 30,
      limit: 10,
      p_factory: "Factory 1",
      p_line: 4,
    }
    let product3 = {
      name: '은',
      stock_amount: 40,
      limit: 50,
      p_factory: "Factory 2",
      p_line: 2
    }
    let product4 = {
      name: '스테인레스',
      stock_amount: 50,
      limit: 50,
      p_factory: "Factory 3",
      p_line: 3
    }



    let line1 = {
      name: "Line 1",
      lineId: 1,
     processes: processes1,
      product: product1
    }
    let line2 = {
      name: "Line 2",
      lineId: 2,
      processes: processes2,
      product: product2
    }
    let line3 = {
      name: "Line 3",
      lineId: 3,
      processes: processes1,
      product: product3
    }
    let line4 = {
      name: "Line 4",
      lineId: 4,
      processes: processes2,
      product: product4
    }

    lines.push(line1);
    lines.push(line2);
    lines.push(line3);
    lines.push(line4);
    
    lines2.push(line2);
    lines2.push(line1);
    lines2.push(line4);
    lines2.push(line3);


    let factory1 = {
      name: "Factory 1",
      description: "공장 설명",
      lines: lines,
      products: this.sampleProducts(),
      wares: this.sampleFactoryWare(4)
    }
    let factory2 = {
      name: "Factory 2",
      description: "공장 설명",
      lines: lines2,
      products: this.sampleProducts(),
      wares: this.sampleFactoryWare(3)
    }
    let factory3 = {
      name: "Factory 3",
      description: "공장 설명",
      lines: lines,
      products: this.sampleProducts(),
      wares: this.sampleFactoryWare(2)
    }
    
    let factory4 = {
      name: "Factory 4",
      description: "공장 설명",
      lines: lines2,
      products: this.sampleProducts(),
      wares: this.sampleFactoryWare(1)
    }
    factories.push(factory1);
    factories.push(factory2);
    factories.push(factory3);
    factories.push(factory4);

    return factories;
  }

  sampleWareHouse(){
    let warehouses = [];

    let product1 = {
      name: '철',
      stock_amount: 20,
      limit: 40,
      p_factory: "Factory 1",
      p_line: 1,
    }
    let product2 = {
      name: '금',
      stock_amount: 30,
      limit: 10,
      p_factory: "Factory 1",
      p_line: 4,
    }
    let product3 = {
      name: '은',
      stock_amount: 40,
      limit: 50,
      p_factory: "Factory 2",
      p_line: 2
    }
    let product4 = {
      name: '스테인레스',
      stock_amount: 50,
      limit: 50,
      p_factory: "Factory 3",
      p_line: 3
    }
    let product5 = {
      name: '동',
      stock_amount: 60,
      limit: 50,
      p_factory: "Factory 4",
      p_line: 1
    }
    let product6 = {
      name: '구리',
      stock_amount: 70,
      limit: 50,
      p_factory: "Factory 3",
      p_line: 2
    }

    let products1 = [];
    products1.push(product1);
    products1.push(product2);
    products1.push(product3);
    products1.push(product4);
    products1.push(product5);
    products1.push(product6);
    let products2 =[];
    products2.push(product3);
    products2.push(product2);
    products2.push(product1);
    products2.push(product4);
    products2.push(product6);
    products2.push(product5);
    let products3 =[];
    products3.push(product4);
    products3.push(product1);
    products3.push(product3);
    products3.push(product5);
    products3.push(product2);
    let products4 =[];
    products4.push(product5);
    products4.push(product1);
    products4.push(product2);

    let warehouse1 = {
      name: "warehouse 1",
      description: "창고 설명",
      products: products1,
    }
    let warehouse2 = {
      name: "warehouse 2",
      description: "창고 설명",
      products: products2,
    }
    let warehouse3 = {
      name: "warehouse 3",
      description: "창고 설명",
      products: products3,
    }
    let warehouse4 = {
      name: "warehouse 4",
      description: "창고 설명",
      products: products4,
    }
    warehouses.push(warehouse1);
    warehouses.push(warehouse2);
    warehouses.push(warehouse3);
    warehouses.push(warehouse4);

    return warehouses;
  }

  sampleProducts(){
    let product1 = {
      name: '철',
      stock_amount: 20,
      limit: 40,
      p_factory: "Factory 1",
      p_line: 1,
    }
    let product2 = {
      name: '금',
      stock_amount: 30,
      limit: 10,
      p_factory: "Factory 1",
      p_line: 4,
    }
    let product3 = {
      name: '은',
      stock_amount: 40,
      limit: 50,
      p_factory: "Factory 2",
      p_line: 2
    }
    let product4 = {
      name: '스테인레스',
      stock_amount: 50,
      limit: 50,
      p_factory: "Factory 3",
      p_line: 3
    }
    let product5 = {
      name: '동',
      stock_amount: 60,
      limit: 50,
      p_factory: "Factory 4",
      p_line: 1
    }
    let product6 = {
      name: '구리',
      stock_amount: 70,
      limit: 50,
      p_factory: "Factory 3",
      p_line: 2
    }

    let products = [];
    products.push(product1);
    products.push(product2);
    products.push(product3);
    products.push(product4);
    products.push(product5);
    products.push(product6);
    return products;
  }

  sampleProductPoor(){
    let productPoor = [{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '치수불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 12:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '설비고장',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 03:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '외관불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 06:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '치수불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 11:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '치수불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 12:00:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '설비고장',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 12:10:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '외관불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 12:20:23'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '치수불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 06:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '외관불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 06:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '설비고장',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 06:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '외관불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 06:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '치수불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 06:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '외관불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 06:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '설비고장',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 06:30:33'
    },{
      o_line: (Math.floor(Math.random() * 5)+1),
      o_process: (Math.floor(Math.random() * 16)+1),
      poor_what: '외관불량',
      o_time: '17.0'+(Math.round(Math.random() * 10)).toString()+'.0'+(Math.round(Math.random() * 10)).toString()+' 06:30:33'
    },];
    return productPoor;
  }

  getProcessPoor(){
    let poor = {
      poor1_num: (Math.round(Math.random() * 10)),
      poor2_num: (Math.round(Math.random() * 10)),
      poor3_num: (Math.round(Math.random() * 10)),             
      cause: (Math.round(Math.random() * 100)),
      ppm: (Math.round(Math.random() * 10)),
      m_num: 3,
      product_num: (Math.round(Math.random() * 100)),
    }
    return poor;
  }

  getProcessMachine(){
    let machine_fix = {
      date: '17/0'+(Math.round(Math.random() * 10)).toString()+'/0'+(Math.round(Math.random() * 10)).toString(),
      fix_what: 'code #'+(Math.round(Math.random() * 100)).toString()
    }
    let machines = [
      {
        m_name: 'Machine 1',
        m_cycle: (Math.round(Math.random() * 10)),
        m_runtime: (Math.round(Math.random() * 10)),
        m_runpercentage: (Math.round(Math.random() * 10)),
        m_fix: machine_fix,
        m_poor: this.sampleProductPoor(),
      },
      {
        m_name: 'Machine 2',
        m_cycle: (Math.round(Math.random() * 10)),
        m_runtime: (Math.round(Math.random() * 10)),
        m_runpercentage: (Math.round(Math.random() * 10)),
        m_fix: machine_fix,
        m_poor: this.sampleProductPoor(),
      },
      {
        m_name: 'Machine 3',
        m_cycle: (Math.round(Math.random() * 10)),
        m_runtime: (Math.round(Math.random() * 10)),
        m_runpercentage: (Math.round(Math.random() * 10)),
        m_fix: machine_fix,
        m_poor: this.sampleProductPoor(),
      },
      {
        m_name: 'Machine 4',
        m_cycle: (Math.round(Math.random() * 10)),
        m_runtime: (Math.round(Math.random() * 10)),
        m_runpercentage: (Math.round(Math.random() * 10)),
        m_fix: machine_fix,
        m_poor: this.sampleProductPoor(),
      },
      {
        m_name: 'Machine 5',
        m_cycle: (Math.round(Math.random() * 10)),
        m_runtime: (Math.round(Math.random() * 10)),
        m_runpercentage: (Math.round(Math.random() * 10)),
        m_fix: machine_fix,
        m_poor: this.sampleProductPoor(),
      }
    ]
    return machines;
  }

  sampleWorker(){
    let workers = [
      {
        w_position: '차장',
        w_name: '홍길동',
        w_class: '팀장',
        w_enter: '2005.10.10',
        w_phone: '010-0000-0000',
        w_email: '1@naver.com',
        w_isWork: true,
      },
      {
        w_position: '과장',
        w_name: '임꺽정',
        w_class: '팀원',
        w_enter: '2008.2.23',
        w_phone: '010-0000-0000',
        w_email: '2@naver.com',
        w_isWork: true,
      },
      {
        w_position: '대리',
        w_name: '김덕배',
        w_class: '팀원',
        w_enter: '2013.4.11',
        w_phone: '010-0000-0000',
        w_email: '3@naver.com',
        w_isWork: false,
      },
      {
        w_position: '사원',
        w_name: '홍길홍',
        w_class: '팀원',
        w_enter: '2014.12.10',
        w_phone: '010-0000-0000',
        w_email: '4@naver.com',
        w_isWork: true,
      },
      {
        w_position: '사원',
        w_name: '존레논',
        w_class: '팀원',
        w_enter: '2015.1.10',
        w_phone: '010-0000-0000',
        w_email: '5@naver.com',
        w_isWork: false,
      },
      {
        w_position: '차장',
        w_name: '홍길동',
        w_class: '팀장',
        w_enter: '2005.10.10',
        w_phone: '010-0000-0000',
        w_email: '1@naver.com',
        w_isWork: false,
      },
      {
        w_position: '과장',
        w_name: '임꺽정',
        w_class: '팀원',
        w_enter: '2008.2.23',
        w_phone: '010-0000-0000',
        w_email: '2@naver.com',
        w_isWork: true,
      },
      {
        w_position: '대리',
        w_name: '김덕배',
        w_class: '팀원',
        w_enter: '2013.4.11',
        w_phone: '010-0000-0000',
        w_email: '3@naver.com',
        w_isWork: true,
      },
      {
        w_position: '사원',
        w_name: '홍길홍',
        w_class: '팀원',
        w_enter: '2014.12.10',
        w_phone: '010-0000-0000',
        w_email: '4@naver.com',
        w_isWork: true,
      },
      {
        w_position: '사원',
        w_name: '존레논',
        w_class: '팀원',
        w_enter: '2015.1.10',
        w_phone: '010-0000-0000',
        w_email: '5@naver.com',
        w_isWork: true,
      },
    ];

    let teams1 = [
      {
        t_name: '생산관리팀',
        workers: workers
      },{
        t_name: '생산지원팀',
        workers: workers
      },{
        t_name: '생산 1팀',
        workers: workers
      },{
        t_name: '생산 2팀',
        workers: workers
      }
    ]

    let teams2 = [{
        t_name: '영업관리팀',
        workers: workers
      },{
        t_name: '영업지원팀',
        workers: workers
      },{
        t_name: '영업 1팀',
        workers: workers
      },{
        t_name: '영업 2팀',
        workers: workers
      }];
    
    let teams3 = [{
        t_name: 'PM관리팀',
        workers: workers
      },{
        t_name: 'PM지원팀',
        workers: workers
      },{
        t_name: 'PM 1팀',
        workers: workers
      },{
        t_name: 'PM 2팀',
        workers: workers
      }];


    let departments = [
      {
        d_name: '영업부',
        teams: teams2,
      },{
        d_name: '생산부',
        teams: teams1,
      },{
        d_name: 'PM 본부',
        teams: teams3,
      },
    ];

    let companies = [
      {
        c_name: '생산 본부',
        departments: departments,
      },{
        c_name: '영업 본부',
        departments: departments,
      },{
        c_name: 'PM 본부',
        departments: departments,
      }
    ];

    return companies;
  }

  sampleFactoryWare(index: number){
    let product_ware1: Array<string> = [];

    product_ware1.push('자재1');
    product_ware1.push('자재2');
    product_ware1.push('자재3');

    let product_ware2: Array<string> = [];

    product_ware2.push('자재4');
    product_ware2.push('자재5');

    let product_ware3: Array<string> = [];

    product_ware3.push('자재6');
    product_ware3.push('자재7');
    product_ware3.push('자재8');

    let product_ware4: Array<string> = [];

    product_ware4.push('자재9');
    product_ware4.push('자재10');
    product_ware4.push('자재11');
    product_ware4.push('자재12');
    product_ware4.push('자재13');

    let factoryWareTemp = [];
    factoryWareTemp.push(product_ware1);
    factoryWareTemp.push(product_ware2);
    factoryWareTemp.push(product_ware3);
    factoryWareTemp.push(product_ware4);

    let factoryWare = [];
    for(let i=0; i<index; i++){
      factoryWare.push(factoryWareTemp[i]);
    }
    return factoryWare;
  }
}
