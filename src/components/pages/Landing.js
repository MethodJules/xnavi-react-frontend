import React, { } from 'react';
import MyHeader from '../../components/organism/Header/MyHeader';
import Search from '../../components/organism/MorphSearch/Search';
import SideBar from '../../components/organism/SideBar/SideBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Landing.css';

import events from 'events';
import ajax from '../../ajax';
import ReactDOM from 'react-dom';


var testArticle =
{
  "jsonapi": {
    "version": "1.0",
    "meta": {
      "links": {
        "self": {
          "href": "http://jsonapi.org/format/1.0/"
        }
      }
    }
  },
  "data": {
    "type": "node--article",
    "id": "160123c3-cbd2-4f21-8206-cc82e7a94f66",
    "attributes": {
      "drupal_internal__nid": 15,
      "drupal_internal__vid": 22,
      "langcode": "en",
      "revision_timestamp": "2019-12-03T10:03:53+00:00",
      "revision_log": null,
      "status": true,
      "title": "Hallo Welt",
      "created": "2019-12-03T10:03:33+00:00",
      "changed": "2019-12-03T10:03:53+00:00",
      "promote": true,
      "sticky": false,
      "default_langcode": true,
      "revision_translation_affected": true,
      "path": {
        "alias": null,
        "pid": null,
        "langcode": "en"
      },
      "body": {
        "value": "<p>Hallo Welt Body</p>\r\n",
        "format": "basic_html",
        "processed": "<p>Hallo Welt Body</p>",
        "summary": ""
      },
      "comment": {
        "status": 2,
        "cid": 0,
        "last_comment_timestamp": 1575367433,
        "last_comment_name": null,
        "last_comment_uid": 1,
        "comment_count": 0
      }
    },
    "relationships": {
      "node_type": {
        "data": {
          "type": "node_type--node_type",
          "id": "e6e24d24-ef9e-4ef5-8289-a8d76bd6f45e"
        },
        "links": {
          "self": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/relationships/node_type?resourceVersion=id%3A22"
          },
          "related": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/node_type?resourceVersion=id%3A22"
          }
        }
      },
      "revision_uid": {
        "data": {
          "type": "user--user",
          "id": "5feecf30-7a90-4900-8d7a-65779e483fae"
        },
        "links": {
          "self": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/relationships/revision_uid?resourceVersion=id%3A22"
          },
          "related": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/revision_uid?resourceVersion=id%3A22"
          }
        }
      },
      "uid": {
        "data": {
          "type": "user--user",
          "id": "5feecf30-7a90-4900-8d7a-65779e483fae"
        },
        "links": {
          "self": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/relationships/uid?resourceVersion=id%3A22"
          },
          "related": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/uid?resourceVersion=id%3A22"
          }
        }
      },
      "field_image": {
        "data": null,
        "links": {
          "self": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/relationships/field_image?resourceVersion=id%3A22"
          },
          "related": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/field_image?resourceVersion=id%3A22"
          }
        }
      },
      "field_tags": {
        "data": [],
        "links": {
          "self": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/relationships/field_tags?resourceVersion=id%3A22"
          },
          "related": {
            "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66/field_tags?resourceVersion=id%3A22"
          }
        }
      }
    },
    "links": {
      "self": {
        "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66?resourceVersion=id%3A22"
      }
    }
  },
  "links": {
    "self": {
      "href": "http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66"
    }
  }
};

//var json = JSON.parse(testArticle);




//link des artikels, auf den ich zugreifen möchte
var url = 'http://cultrualrememberancetest2.dd:8083/jsonapi/node/article/160123c3-cbd2-4f21-8206-cc82e7a94f66';
const emitter = new events.EventEmitter();




class Landing extends React.Component {

  render() {
   
    return (

      <div>
        <MyHeader />
        <Row>
          <Col xs={3}> <Search></Search> </Col>
          <Col xs={6} className='inhalt'>

            <div>
              <h1> {testArticle.data.attributes.title} </h1>
            </div>



            
            {testArticle.data.attributes.body.value}

          </Col>
          <Col > <SideBar></SideBar> </Col>
        </Row>
      </div>
    )

  }

}

export default Landing;