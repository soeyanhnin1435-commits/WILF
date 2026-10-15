var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.720620774552474,
          "pitch": 0.3748867143579684,
          "rotation": 4.71238898038469,
          "target": "1-entrance"
        },
        {
          "yaw": 2.6770778439117766,
          "pitch": 0.1620359291152358,
          "rotation": 5.497787143782138,
          "target": "2-yard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06093243662698633,
          "pitch": 0.07339129179679382,
          "rotation": 0,
          "target": "3-dinning"
        },
        {
          "yaw": 1.3031314888988916,
          "pitch": 0.2763210879397704,
          "rotation": 6.283185307179586,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-yard",
      "name": "YARD",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3827819649352868,
          "pitch": 0.2800646361199668,
          "rotation": 0,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dinning",
      "name": "DINNING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.00047523112999314776,
        "pitch": 0.02200605104578912,
        "fov": 1.3911794189911848
      },
      "linkHotspots": [
        {
          "yaw": 0.20638402377361587,
          "pitch": 0.021537020389951422,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": -1.0313453454538077,
          "pitch": -0.06399343845200534,
          "rotation": 0,
          "target": "4-living"
        },
        {
          "yaw": -0.22179157591901344,
          "pitch": -0.018882686938283655,
          "rotation": 0,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7495498728720449,
          "pitch": -0.04734566683036334,
          "rotation": 0,
          "target": "0-kitchen"
        },
        {
          "yaw": 2.216995458648918,
          "pitch": 0.1334151860492696,
          "rotation": 0,
          "target": "3-dinning"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
