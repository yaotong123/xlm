var THREE = THREE || {
	REVISION: "49"
};
if(!self.Int32Array) {
	self.Int32Array = Array;
	self.Float32Array = Array
}
THREE.Color = function(e) {
	if(e !== undefined) this.setHex(e);
	return this
};
THREE.Color.prototype = {
	constructor: THREE.Color,
	r: 1,
	g: 1,
	b: 1,
	copy: function(e) {
		this.r = e.r;
		this.g = e.g;
		this.b = e.b;
		return this
	},
	setRGB: function(e, t, n) {
		this.r = e;
		this.g = t;
		this.b = n;
		return this
	},
	setHex: function(e) {
		e = Math.floor(e);
		this.r = (e >> 16 & 255) / 255;
		this.g = (e >> 8 & 255) / 255;
		this.b = (e & 255) / 255;
		return this
	},
	lerpSelf: function(e, t) {
		this.r += (e.r - this.r) * t;
		this.g += (e.g - this.g) * t;
		this.b += (e.b - this.b) * t;
		return this
	},
	getHex: function() {
		return Math.floor(this.r * 255) << 16 ^ Math.floor(this.g * 255) << 8 ^ Math.floor(this.b * 255)
	},
	getContextStyle: function() {
		return "rgb(" + Math.floor(this.r * 255) + "," + Math.floor(this.g * 255) + "," + Math.floor(this.b * 255) + ")"
	},
	clone: function() {
		return(new THREE.Color).setRGB(this.r, this.g, this.b)
	}
};
THREE.Vector2 = function(e, t) {
	this.x = e || 0;
	this.y = t || 0
};
THREE.Vector2.prototype = {
	constructor: THREE.Vector2
};
THREE.Vector3 = function(e, t, n) {
	this.x = e || 0;
	this.y = t || 0;
	this.z = n || 0
};
THREE.Vector3.prototype = {
	constructor: THREE.Vector3,
	set: function(e, t, n) {
		this.x = e;
		this.y = t;
		this.z = n;
		return this
	},
	setX: function(e) {
		this.x = e;
		return this
	},
	setY: function(e) {
		this.y = e;
		return this
	},
	setZ: function(e) {
		this.z = e;
		return this
	},
	copy: function(e) {
		this.x = e.x;
		this.y = e.y;
		this.z = e.z;
		return this
	},
	add: function(e, t) {
		this.x = e.x + t.x;
		this.y = e.y + t.y;
		this.z = e.z + t.z;
		return this
	},
	addSelf: function(e) {
		this.x += e.x;
		this.y += e.y;
		this.z += e.z;
		return this
	},
	addScalar: function(e) {
		this.x += e;
		this.y += e;
		this.z += e;
		return this
	},
	sub: function(e, t) {
		this.x = e.x - t.x;
		this.y = e.y - t.y;
		this.z = e.z - t.z;
		return this
	},
	multiply: function(e, t) {
		this.x = e.x * t.x;
		this.y = e.y * t.y;
		this.z = e.z * t.z;
		return this
	},
	multiplyScalar: function(e) {
		this.x *= e;
		this.y *= e;
		this.z *= e;
		return this
	},
	divideScalar: function(e) {
		if(e) {
			this.x /= e;
			this.y /= e;
			this.z /= e
		} else {
			this.x = 0;
			this.y = 0;
			this.z = 0
		}
		return this
	},
	negate: function() {
		return this.multiplyScalar(-1)
	},
	dot: function(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z
	},
	lengthSq: function() {
		return this.x * this.x + this.y * this.y + this.z * this.z
	},
	length: function() {
		return Math.sqrt(this.lengthSq())
	},
	lengthManhattan: function() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
	},
	normalize: function() {
		return this.divideScalar(this.length())
	},
	cross: function(e, t) {
		this.x = e.y * t.z - e.z * t.y;
		this.y = e.z * t.x - e.x * t.z;
		this.z = e.x * t.y - e.y * t.x;
		return this
	},
	distanceTo: function(e) {
		return Math.sqrt(this.distanceToSquared(e))
	},
	distanceToSquared: function(e) {
		return(new THREE.Vector3).sub(this, e).lengthSq()
	},
	clone: function() {
		return new THREE.Vector3(this.x, this.y, this.z)
	}
};
THREE.Vector4 = function(e, t, n, r) {
	this.x = e || 0;
	this.y = t || 0;
	this.z = n || 0;
	this.w = r !== undefined ? r : 1
};
THREE.Vector4.prototype = {
	constructor: THREE.Vector4,
	set: function(e, t, n, r) {
		this.x = e;
		this.y = t;
		this.z = n;
		this.w = r;
		return this
	},
	copy: function(e) {
		this.x = e.x;
		this.y = e.y;
		this.z = e.z;
		this.w = e.w !== undefined ? e.w : 1;
		return this
	},
	add: function(e, t) {
		this.x = e.x + t.x;
		this.y = e.y + t.y;
		this.z = e.z + t.z;
		this.w = e.w + t.w;
		return this
	},
	addSelf: function(e) {
		this.x += e.x;
		this.y += e.y;
		this.z += e.z;
		this.w += e.w;
		return this
	},
	sub: function(e, t) {
		this.x = e.x - t.x;
		this.y = e.y - t.y;
		this.z = e.z - t.z;
		this.w = e.w - t.w;
		return this
	},
	subSelf: function(e) {
		this.x -= e.x;
		this.y -= e.y;
		this.z -= e.z;
		this.w -= e.w;
		return this
	},
	multiplyScalar: function(e) {
		this.x *= e;
		this.y *= e;
		this.z *= e;
		this.w *= e;
		return this
	},
	divideScalar: function(e) {
		if(e) {
			this.x /= e;
			this.y /= e;
			this.z /= e;
			this.w /= e
		} else {
			this.x = 0;
			this.y = 0;
			this.z = 0;
			this.w = 1
		}
		return this
	},
	negate: function() {
		return this.multiplyScalar(-1)
	},
	dot: function(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
	},
	lengthSq: function() {
		return this.dot(this)
	},
	length: function() {
		return Math.sqrt(this.lengthSq())
	},
	normalize: function() {
		return this.divideScalar(this.length())
	}
};
THREE.Frustum = function() {
	this.planes = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4]
};
THREE.Frustum.prototype.setFromMatrix = function(e) {
	var t, n, r = this.planes;
	var i = e.elements;
	var s = i[0],
		o = i[1],
		u = i[2],
		a = i[3];
	var f = i[4],
		l = i[5],
		c = i[6],
		h = i[7];
	var p = i[8],
		d = i[9],
		v = i[10],
		m = i[11];
	var g = i[12],
		y = i[13],
		b = i[14],
		w = i[15];
	r[0].set(a - s, h - f, m - p, w - g);
	r[1].set(a + s, h + f, m + p, w + g);
	r[2].set(a + o, h + l, m + d, w + y);
	r[3].set(a - o, h - l, m - d, w - y);
	r[4].set(a - u, h - c, m - v, w - b);
	r[5].set(a + u, h + c, m + v, w + b);
	for(t = 0; t < 6; t++) {
		n = r[t];
		n.divideScalar(Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z))
	}
};
THREE.Frustum.prototype.contains = function(e) {
	var t, n = this.planes,
		r = e.matrixWorld,
		i = r.elements,
		s = -e.geometry.boundingSphere.radius * r.getMaxScaleOnAxis();
	for(var o = 0; o < 6; o++) {
		t = n[o].x * i[12] + n[o].y * i[13] + n[o].z * i[14] + n[o].w;
		if(t <= s) return false
	}
	return true
};
THREE.Frustum.__v1 = new THREE.Vector3;
THREE.Rectangle = function() {
	function u() {
		i = n - e;
		s = r - t
	}
	var e, t, n, r, i, s, o = true;
	this.getX = function() {
		return e
	};
	this.getY = function() {
		return t
	};
	this.getWidth = function() {
		return i
	};
	this.getHeight = function() {
		return s
	};
	this.getLeft = function() {
		return e
	};
	this.getTop = function() {
		return t
	};
	this.getRight = function() {
		return n
	};
	this.getBottom = function() {
		return r
	};
	this.set = function(i, s, a, f) {
		o = false;
		e = i;
		t = s;
		n = a;
		r = f;
		u()
	};
	this.addPoint = function(i, s) {
		if(o) {
			o = false;
			e = i;
			t = s;
			n = i;
			r = s;
			u()
		} else {
			e = e < i ? e : i;
			t = t < s ? t : s;
			n = n > i ? n : i;
			r = r > s ? r : s;
			u()
		}
	};
	this.addRectangle = function(i) {
		if(o) {
			o = false;
			e = i.getLeft();
			t = i.getTop();
			n = i.getRight();
			r = i.getBottom();
			u()
		} else {
			e = e < i.getLeft() ? e : i.getLeft();
			t = t < i.getTop() ? t : i.getTop();
			n = n > i.getRight() ? n : i.getRight();
			r = r > i.getBottom() ? r : i.getBottom();
			u()
		}
	};
	this.inflate = function(i) {
		e -= i;
		t -= i;
		n += i;
		r += i;
		u()
	};
	this.minSelf = function(i) {
		e = e > i.getLeft() ? e : i.getLeft();
		t = t > i.getTop() ? t : i.getTop();
		n = n < i.getRight() ? n : i.getRight();
		r = r < i.getBottom() ? r : i.getBottom();
		u()
	};
	this.intersects = function(i) {
		if(n < i.getLeft()) return false;
		if(e > i.getRight()) return false;
		if(r < i.getTop()) return false;
		if(t > i.getBottom()) return false;
		return true
	};
	this.empty = function() {
		o = true;
		e = 0;
		t = 0;
		n = 0;
		r = 0;
		u()
	};
	this.isEmpty = function() {
		return o
	}
};
THREE.Matrix3 = function() {
	this.elements = new Float32Array(9)
};
THREE.Matrix3.prototype = {
	constructor: THREE.Matrix3,
	getInverse: function(e) {
		var t = e.elements;
		var n = t[10] * t[5] - t[6] * t[9];
		var r = -t[10] * t[1] + t[2] * t[9];
		var i = t[6] * t[1] - t[2] * t[5];
		var s = -t[10] * t[4] + t[6] * t[8];
		var o = t[10] * t[0] - t[2] * t[8];
		var u = -t[6] * t[0] + t[2] * t[4];
		var a = t[9] * t[4] - t[5] * t[8];
		var f = -t[9] * t[0] + t[1] * t[8];
		var l = t[5] * t[0] - t[1] * t[4];
		var c = t[0] * n + t[1] * s + t[2] * a;
		if(c === 0) {
			console.warn("Matrix3.getInverse(): determinant == 0")
		}
		var h = 1 / c;
		var p = this.elements;
		p[0] = h * n;
		p[1] = h * r;
		p[2] = h * i;
		p[3] = h * s;
		p[4] = h * o;
		p[5] = h * u;
		p[6] = h * a;
		p[7] = h * f;
		p[8] = h * l;
		return this
	}
};
THREE.Matrix4 = function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v) {
	this.elements = new Float32Array(16);
	this.set(e !== undefined ? e : 1, t || 0, n || 0, r || 0, i || 0, s !== undefined ? s : 1, o || 0, u || 0, a || 0, f || 0, l !== undefined ? l : 1, c || 0, h || 0, p || 0, d || 0, v !== undefined ? v : 1)
};
THREE.Matrix4.prototype = {
	constructor: THREE.Matrix4,
	set: function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v) {
		var m = this.elements;
		m[0] = e;
		m[4] = t;
		m[8] = n;
		m[12] = r;
		m[1] = i;
		m[5] = s;
		m[9] = o;
		m[13] = u;
		m[2] = a;
		m[6] = f;
		m[10] = l;
		m[14] = c;
		m[3] = h;
		m[7] = p;
		m[11] = d;
		m[15] = v;
		return this
	},
	copy: function(e) {
		var t = e.elements;
		this.set(t[0], t[4], t[8], t[12], t[1], t[5], t[9], t[13], t[2], t[6], t[10], t[14], t[3], t[7], t[11], t[15]);
		return this
	},
	lookAt: function(e, t, n) {
		var r = this.elements;
		var i = THREE.Matrix4.__v1;
		var s = THREE.Matrix4.__v2;
		var o = THREE.Matrix4.__v3;
		o.sub(e, t).normalize();
		if(o.length() === 0) {
			o.z = 1
		}
		i.cross(n, o).normalize();
		if(i.length() === 0) {
			o.x += 1e-4;
			i.cross(n, o).normalize()
		}
		s.cross(o, i);
		r[0] = i.x;
		r[4] = s.x;
		r[8] = o.x;
		r[1] = i.y;
		r[5] = s.y;
		r[9] = o.y;
		r[2] = i.z;
		r[6] = s.z;
		r[10] = o.z;
		return this
	},
	multiply: function(e, t) {
		var n = e.elements;
		var r = t.elements;
		var i = this.elements;
		var s = n[0],
			o = n[4],
			u = n[8],
			a = n[12];
		var f = n[1],
			l = n[5],
			c = n[9],
			h = n[13];
		var p = n[2],
			d = n[6],
			v = n[10],
			m = n[14];
		var g = n[3],
			y = n[7],
			b = n[11],
			w = n[15];
		var E = r[0],
			S = r[4],
			x = r[8],
			T = r[12];
		var N = r[1],
			C = r[5],
			k = r[9],
			L = r[13];
		var A = r[2],
			O = r[6],
			M = r[10],
			_ = r[14];
		var D = r[3],
			P = r[7],
			H = r[11],
			B = r[15];
		i[0] = s * E + o * N + u * A + a * D;
		i[4] = s * S + o * C + u * O + a * P;
		i[8] = s * x + o * k + u * M + a * H;
		i[12] = s * T + o * L + u * _ + a * B;
		i[1] = f * E + l * N + c * A + h * D;
		i[5] = f * S + l * C + c * O + h * P;
		i[9] = f * x + l * k + c * M + h * H;
		i[13] = f * T + l * L + c * _ + h * B;
		i[2] = p * E + d * N + v * A + m * D;
		i[6] = p * S + d * C + v * O + m * P;
		i[10] = p * x + d * k + v * M + m * H;
		i[14] = p * T + d * L + v * _ + m * B;
		i[3] = g * E + y * N + b * A + w * D;
		i[7] = g * S + y * C + b * O + w * P;
		i[11] = g * x + y * k + b * M + w * H;
		i[15] = g * T + y * L + b * _ + w * B;
		return this
	},
	multiplyScalar: function(e) {
		var t = this.elements;
		t[0] *= e;
		t[4] *= e;
		t[8] *= e;
		t[12] *= e;
		t[1] *= e;
		t[5] *= e;
		t[9] *= e;
		t[13] *= e;
		t[2] *= e;
		t[6] *= e;
		t[10] *= e;
		t[14] *= e;
		t[3] *= e;
		t[7] *= e;
		t[11] *= e;
		t[15] *= e;
		return this
	},
	multiplyVector3: function(e) {
		var t = this.elements;
		var n = e.x,
			r = e.y,
			i = e.z;
		var s = 1 / (t[3] * n + t[7] * r + t[11] * i + t[15]);
		e.x = (t[0] * n + t[4] * r + t[8] * i + t[12]) * s;
		e.y = (t[1] * n + t[5] * r + t[9] * i + t[13]) * s;
		e.z = (t[2] * n + t[6] * r + t[10] * i + t[14]) * s;
		return e
	},
	multiplyVector4: function(e) {
		var t = this.elements;
		var n = e.x,
			r = e.y,
			i = e.z,
			s = e.w;
		e.x = t[0] * n + t[4] * r + t[8] * i + t[12] * s;
		e.y = t[1] * n + t[5] * r + t[9] * i + t[13] * s;
		e.z = t[2] * n + t[6] * r + t[10] * i + t[14] * s;
		e.w = t[3] * n + t[7] * r + t[11] * i + t[15] * s;
		return e
	},
	determinant: function() {
		var e = this.elements;
		var t = e[0],
			n = e[4],
			r = e[8],
			i = e[12];
		var s = e[1],
			o = e[5],
			u = e[9],
			a = e[13];
		var f = e[2],
			l = e[6],
			c = e[10],
			h = e[14];
		var p = e[3],
			d = e[7],
			v = e[11],
			m = e[15];
		return i * u * l * p - r * a * l * p - i * o * c * p + n * a * c * p + r * o * h * p - n * u * h * p - i * u * f * d + r * a * f * d + i * s * c * d - t * a * c * d - r * s * h * d + t * u * h * d + i * o * f * v - n * a * f * v - i * s * l * v + t * a * l * v + n * s * h * v - t * o * h * v - r * o * f * m + n * u * f * m + r * s * l * m - t * u * l * m - n * s * c * m + t * o * c * m
	},
	getPosition: function() {
		var e = this.elements;
		return THREE.Matrix4.__v1.set(e[12], e[13], e[14])
	},
	setPosition: function(e) {
		var t = this.elements;
		t[12] = e.x;
		t[13] = e.y;
		t[14] = e.z;
		return this
	},
	getInverse: function(e) {
		var t = this.elements;
		var n = e.elements;
		var r = n[0],
			i = n[4],
			s = n[8],
			o = n[12];
		var u = n[1],
			a = n[5],
			f = n[9],
			l = n[13];
		var c = n[2],
			h = n[6],
			p = n[10],
			d = n[14];
		var v = n[3],
			m = n[7],
			g = n[11],
			y = n[15];
		t[0] = f * d * m - l * p * m + l * h * g - a * d * g - f * h * y + a * p * y;
		t[4] = o * p * m - s * d * m - o * h * g + i * d * g + s * h * y - i * p * y;
		t[8] = s * l * m - o * f * m + o * a * g - i * l * g - s * a * y + i * f * y;
		t[12] = o * f * h - s * l * h - o * a * p + i * l * p + s * a * d - i * f * d;
		t[1] = l * p * v - f * d * v - l * c * g + u * d * g + f * c * y - u * p * y;
		t[5] = s * d * v - o * p * v + o * c * g - r * d * g - s * c * y + r * p * y;
		t[9] = o * f * v - s * l * v - o * u * g + r * l * g + s * u * y - r * f * y;
		t[13] = s * l * c - o * f * c + o * u * p - r * l * p - s * u * d + r * f * d;
		t[2] = a * d * v - l * h * v + l * c * m - u * d * m - a * c * y + u * h * y;
		t[6] = o * h * v - i * d * v - o * c * m + r * d * m + i * c * y - r * h * y;
		t[10] = i * l * v - o * a * v + o * u * m - r * l * m - i * u * y + r * a * y;
		t[14] = o * a * c - i * l * c - o * u * h + r * l * h + i * u * d - r * a * d;
		t[3] = f * h * v - a * p * v - f * c * m + u * p * m + a * c * g - u * h * g;
		t[7] = i * p * v - s * h * v + s * c * m - r * p * m - i * c * g + r * h * g;
		t[11] = s * a * v - i * f * v - s * u * m + r * f * m + i * u * g - r * a * g;
		t[15] = i * f * c - s * a * c + s * u * h - r * f * h - i * u * p + r * a * p;
		this.multiplyScalar(1 / e.determinant());
		return this
	},
	setRotationFromEuler: function(e, t) {
		var n = this.elements;
		var r = e.x,
			i = e.y,
			s = e.z;
		var o = Math.cos(r),
			u = Math.sin(r);
		var a = Math.cos(i),
			f = Math.sin(i);
		var l = Math.cos(s),
			c = Math.sin(s);
		switch(t) {
			case "YXZ":
				var h = a * l,
					p = a * c,
					d = f * l,
					v = f * c;
				n[0] = h + v * u;
				n[4] = d * u - p;
				n[8] = o * f;
				n[1] = o * c;
				n[5] = o * l;
				n[9] = -u;
				n[2] = p * u - d;
				n[6] = v + h * u;
				n[10] = o * a;
				break;
			case "ZXY":
				var h = a * l,
					p = a * c,
					d = f * l,
					v = f * c;
				n[0] = h - v * u;
				n[4] = -o * c;
				n[8] = d + p * u;
				n[1] = p + d * u;
				n[5] = o * l;
				n[9] = v - h * u;
				n[2] = -o * f;
				n[6] = u;
				n[10] = o * a;
				break;
			case "ZYX":
				var m = o * l,
					g = o * c,
					y = u * l,
					b = u * c;
				n[0] = a * l;
				n[4] = y * f - g;
				n[8] = m * f + b;
				n[1] = a * c;
				n[5] = b * f + m;
				n[9] = g * f - y;
				n[2] = -f;
				n[6] = u * a;
				n[10] = o * a;
				break;
			case "YZX":
				var w = o * a,
					E = o * f,
					S = u * a,
					x = u * f;
				n[0] = a * l;
				n[4] = x - w * c;
				n[8] = S * c + E;
				n[1] = c;
				n[5] = o * l;
				n[9] = -u * l;
				n[2] = -f * l;
				n[6] = E * c + S;
				n[10] = w - x * c;
				break;
			case "XZY":
				var w = o * a,
					E = o * f,
					S = u * a,
					x = u * f;
				n[0] = a * l;
				n[4] = -c;
				n[8] = f * l;
				n[1] = w * c + x;
				n[5] = o * l;
				n[9] = E * c - S;
				n[2] = S * c - E;
				n[6] = u * l;
				n[10] = x * c + w;
				break;
			default:
				var m = o * l,
					g = o * c,
					y = u * l,
					b = u * c;
				n[0] = a * l;
				n[4] = -a * c;
				n[8] = f;
				n[1] = g + y * f;
				n[5] = m - b * f;
				n[9] = -u * a;
				n[2] = b - m * f;
				n[6] = y + g * f;
				n[10] = o * a;
				break
		}
		return this
	},
	setRotationFromQuaternion: function(e) {
		var t = this.elements;
		var n = e.x,
			r = e.y,
			i = e.z,
			s = e.w;
		var o = n + n,
			u = r + r,
			a = i + i;
		var f = n * o,
			l = n * u,
			c = n * a;
		var h = r * u,
			p = r * a,
			d = i * a;
		var v = s * o,
			m = s * u,
			g = s * a;
		t[0] = 1 - (h + d);
		t[4] = l - g;
		t[8] = c + m;
		t[1] = l + g;
		t[5] = 1 - (f + d);
		t[9] = p - v;
		t[2] = c - m;
		t[6] = p + v;
		t[10] = 1 - (f + h);
		return this
	},
	extractRotation: function(e) {
		var t = this.elements;
		var n = e.elements;
		var r = THREE.Matrix4.__v1;
		var i = 1 / r.set(n[0], n[1], n[2]).length();
		var s = 1 / r.set(n[4], n[5], n[6]).length();
		var o = 1 / r.set(n[8], n[9], n[10]).length();
		t[0] = n[0] * i;
		t[1] = n[1] * i;
		t[2] = n[2] * i;
		t[4] = n[4] * s;
		t[5] = n[5] * s;
		t[6] = n[6] * s;
		t[8] = n[8] * o;
		t[9] = n[9] * o;
		t[10] = n[10] * o;
		return this
	},
	translate: function(e) {
		var t = this.elements;
		var n = e.x,
			r = e.y,
			i = e.z;
		t[12] = t[0] * n + t[4] * r + t[8] * i + t[12];
		t[13] = t[1] * n + t[5] * r + t[9] * i + t[13];
		t[14] = t[2] * n + t[6] * r + t[10] * i + t[14];
		t[15] = t[3] * n + t[7] * r + t[11] * i + t[15];
		return this
	},
	rotateX: function(e) {
		var t = this.elements;
		var n = t[4];
		var r = t[5];
		var i = t[6];
		var s = t[7];
		var o = t[8];
		var u = t[9];
		var a = t[10];
		var f = t[11];
		var l = Math.cos(e);
		var c = Math.sin(e);
		t[4] = l * n + c * o;
		t[5] = l * r + c * u;
		t[6] = l * i + c * a;
		t[7] = l * s + c * f;
		t[8] = l * o - c * n;
		t[9] = l * u - c * r;
		t[10] = l * a - c * i;
		t[11] = l * f - c * s;
		return this
	},
	rotateY: function(e) {
		var t = this.elements;
		var n = t[0];
		var r = t[1];
		var i = t[2];
		var s = t[3];
		var o = t[8];
		var u = t[9];
		var a = t[10];
		var f = t[11];
		var l = Math.cos(e);
		var c = Math.sin(e);
		t[0] = l * n - c * o;
		t[1] = l * r - c * u;
		t[2] = l * i - c * a;
		t[3] = l * s - c * f;
		t[8] = l * o + c * n;
		t[9] = l * u + c * r;
		t[10] = l * a + c * i;
		t[11] = l * f + c * s;
		return this
	},
	rotateZ: function(e) {
		var t = this.elements;
		var n = t[0];
		var r = t[1];
		var i = t[2];
		var s = t[3];
		var o = t[4];
		var u = t[5];
		var a = t[6];
		var f = t[7];
		var l = Math.cos(e);
		var c = Math.sin(e);
		t[0] = l * n + c * o;
		t[1] = l * r + c * u;
		t[2] = l * i + c * a;
		t[3] = l * s + c * f;
		t[4] = l * o - c * n;
		t[5] = l * u - c * r;
		t[6] = l * a - c * i;
		t[7] = l * f - c * s;
		return this
	},
	rotateByAxis: function(e, t) {
		var n = this.elements;
		if(e.x === 1 && e.y === 0 && e.z === 0) {
			return this.rotateX(t)
		} else if(e.x === 0 && e.y === 1 && e.z === 0) {
			return this.rotateY(t)
		} else if(e.x === 0 && e.y === 0 && e.z === 1) {
			return this.rotateZ(t)
		}
		var r = e.x,
			i = e.y,
			s = e.z;
		var o = Math.sqrt(r * r + i * i + s * s);
		r /= o;
		i /= o;
		s /= o;
		var u = r * r,
			a = i * i,
			f = s * s;
		var l = Math.cos(t);
		var c = Math.sin(t);
		var h = 1 - l;
		var p = r * i * h;
		var d = r * s * h;
		var v = i * s * h;
		var m = r * c;
		var g = i * c;
		var y = s * c;
		var b = u + (1 - u) * l;
		var w = p + y;
		var E = d - g;
		var S = p - y;
		var x = a + (1 - a) * l;
		var T = v + m;
		var N = d + g;
		var C = v - m;
		var k = f + (1 - f) * l;
		var L = n[0],
			A = n[1],
			O = n[2],
			M = n[3];
		var _ = n[4],
			D = n[5],
			P = n[6],
			H = n[7];
		var B = n[8],
			j = n[9],
			F = n[10],
			I = n[11];
		var q = n[12],
			R = n[13],
			U = n[14],
			z = n[15];
		n[0] = b * L + w * _ + E * B;
		n[1] = b * A + w * D + E * j;
		n[2] = b * O + w * P + E * F;
		n[3] = b * M + w * H + E * I;
		n[4] = S * L + x * _ + T * B;
		n[5] = S * A + x * D + T * j;
		n[6] = S * O + x * P + T * F;
		n[7] = S * M + x * H + T * I;
		n[8] = N * L + C * _ + k * B;
		n[9] = N * A + C * D + k * j;
		n[10] = N * O + C * P + k * F;
		n[11] = N * M + C * H + k * I;
		return this
	},
	scale: function(e) {
		var t = this.elements;
		var n = e.x,
			r = e.y,
			i = e.z;
		t[0] *= n;
		t[4] *= r;
		t[8] *= i;
		t[1] *= n;
		t[5] *= r;
		t[9] *= i;
		t[2] *= n;
		t[6] *= r;
		t[10] *= i;
		t[3] *= n;
		t[7] *= r;
		t[11] *= i;
		return this
	},
	getMaxScaleOnAxis: function() {
		var e = this.elements;
		var t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2];
		var n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6];
		var r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, Math.max(n, r)))
	},
	makeFrustum: function(e, t, n, r, i, s) {
		var o = this.elements;
		var u = 2 * i / (t - e);
		var a = 2 * i / (r - n);
		var f = (t + e) / (t - e);
		var l = (r + n) / (r - n);
		var c = -(s + i) / (s - i);
		var h = -2 * s * i / (s - i);
		o[0] = u;
		o[4] = 0;
		o[8] = f;
		o[12] = 0;
		o[1] = 0;
		o[5] = a;
		o[9] = l;
		o[13] = 0;
		o[2] = 0;
		o[6] = 0;
		o[10] = c;
		o[14] = h;
		o[3] = 0;
		o[7] = 0;
		o[11] = -1;
		o[15] = 0;
		return this
	},
	makePerspective: function(e, t, n, r) {
		var i = n * Math.tan(e * Math.PI / 360);
		var s = -i;
		var o = s * t;
		var u = i * t;
		return this.makeFrustum(o, u, s, i, n, r)
	},
	clone: function() {
		var e = this.elements;
		return new THREE.Matrix4(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15])
	}
};
THREE.Matrix4.__v1 = new THREE.Vector3;
THREE.Matrix4.__v2 = new THREE.Vector3;
THREE.Matrix4.__v3 = new THREE.Vector3;
THREE.Matrix4.__m1 = new THREE.Matrix4;
THREE.Matrix4.__m2 = new THREE.Matrix4;
THREE.Object3D = function() {
	this.id = THREE.Object3DCount++;
	this.name = "";
	this.parent = undefined;
	this.children = [];
	this.up = new THREE.Vector3(0, 1, 0);
	this.position = new THREE.Vector3;
	this.rotation = new THREE.Vector3;
	this.eulerOrder = "XYZ";
	this.scale = new THREE.Vector3(1, 1, 1);
	this.doubleSided = false;
	this.flipSided = false;
	this.renderDepth = null;
	this.rotationAutoUpdate = true;
	this.matrix = new THREE.Matrix4;
	this.matrixWorld = new THREE.Matrix4;
	this.matrixRotationWorld = new THREE.Matrix4;
	this.matrixAutoUpdate = true;
	this.matrixWorldNeedsUpdate = true;
	this.useQuaternion = false;
	this.boundRadius = 0;
	this.boundRadiusScale = 1;
	this.visible = true;
	this.castShadow = false;
	this.receiveShadow = false;
	this.frustumCulled = true;
	this._vector = new THREE.Vector3
};
THREE.Object3D.prototype = {
	constructor: THREE.Object3D,
	add: function(e) {
		if(e === this) {
			console.warn("THREE.Object3D.add: An object can't be added as a child of itself.");
			return
		}
		if(e instanceof THREE.Object3D) {
			if(e.parent !== undefined) {
				e.parent.remove(e)
			}
			e.parent = this;
			this.children.push(e);
			var t = this;
			while(t.parent !== undefined) {
				t = t.parent
			}
			if(t !== undefined && t instanceof THREE.Scene) {
				t.__addObject(e)
			}
		}
	},
	remove: function(e) {
		var t = this.children.indexOf(e);
		if(t !== -1) {
			e.parent = undefined;
			this.children.splice(t, 1);
			var n = this;
			while(n.parent !== undefined) {
				n = n.parent
			}
			if(n !== undefined && n instanceof THREE.Scene) {
				n.__removeObject(e)
			}
		}
	},
	updateMatrix: function() {
		this.matrix.setPosition(this.position);
		if(this.useQuaternion) {
			this.matrix.setRotationFromQuaternion(this.quaternion)
		} else {
			this.matrix.setRotationFromEuler(this.rotation, this.eulerOrder)
		}
		if(this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1) {
			this.matrix.scale(this.scale);
			this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z))
		}
		this.matrixWorldNeedsUpdate = true
	},
	updateMatrixWorld: function(e) {
		this.matrixAutoUpdate && this.updateMatrix();
		if(this.matrixWorldNeedsUpdate || e) {
			if(this.parent) {
				this.matrixWorld.multiply(this.parent.matrixWorld, this.matrix)
			} else {
				this.matrixWorld.copy(this.matrix)
			}
			this.matrixWorldNeedsUpdate = false;
			e = true
		}
		for(var t = 0, n = this.children.length; t < n; t++) {
			this.children[t].updateMatrixWorld(e)
		}
	}
};
THREE.Object3DCount = 0;
THREE.Projector = function() {
	function C() {
		var e = n[t] = n[t] || new THREE.RenderableObject;
		t++;
		return e
	}

	function k() {
		var e = s[i] = s[i] || new THREE.RenderableVertex;
		i++;
		return e
	}

	function L() {
		var e = a[u] = a[u] || new THREE.RenderableFace3;
		u++;
		return e
	}

	function A() {
		var e = l[f] = l[f] || new THREE.RenderableFace4;
		f++;
		return e
	}

	function O(e, t) {
		return t.z - e.z
	}
	var e, t, n = [],
		r, i, s = [],
		o, u, a = [],
		f, l = [],
		c, h, p = [],
		d, v, m = [],
		g = {
			objects: [],
			sprites: [],
			lights: [],
			elements: []
		},
		y = new THREE.Vector3,
		b = new THREE.Vector4,
		w = new THREE.Matrix4,
		E = new THREE.Matrix4,
		S = new THREE.Frustum,
		x = new THREE.Vector4,
		T = new THREE.Vector4,
		N;
	this.projectGraph = function(n, r) {
		t = 0;
		g.objects.length = 0;
		g.sprites.length = 0;
		g.lights.length = 0;
		var i = function(t) {
			if(t.visible === false) return;
			if(t instanceof THREE.Mesh && (t.frustumCulled === false || S.contains(t))) {
				y.copy(t.matrixWorld.getPosition());
				w.multiplyVector3(y);
				e = C();
				e.object = t;
				e.z = y.z;
				g.objects.push(e)
			} else if(t instanceof THREE.Light) {
				g.lights.push(t)
			}
			for(var n = 0, r = t.children.length; n < r; n++) {
				i(t.children[n])
			}
		};
		i(n);
		r && g.objects.sort(O);
		return g
	};
	this.projectScene = function(e, t, n) {
		var a = t.near,
			l = t.far,
			c = false,
			p, d, m, y, b, E, x, T, N, C, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q;
		u = 0;
		f = 0;
		h = 0;
		v = 0;
		g.elements.length = 0;
		if(t.parent === undefined) {
			console.warn("DEPRECATED: Camera hasn't been added to a Scene. Adding it...");
			e.add(t)
		}
		e.updateMatrixWorld();
		t.matrixWorldInverse.getInverse(t.matrixWorld);
		w.multiply(t.projectionMatrix, t.matrixWorldInverse);
		S.setFromMatrix(w);
		g = this.projectGraph(e, false);
		for(p = 0, d = g.objects.length; p < d; p++) {
			D = g.objects[p].object;
			P = D.matrixWorld;
			i = 0;
			if(D instanceof THREE.Mesh) {
				B = D.geometry;
				j = D.geometry.materials;
				F = B.vertices;
				R = B.faces;
				X = B.faceVertexUvs;
				H = D.matrixRotationWorld.extractRotation(P);
				for(m = 0, y = F.length; m < y; m++) {
					r = k();
					r.positionWorld.copy(F[m]);
					P.multiplyVector3(r.positionWorld);
					r.positionScreen.copy(r.positionWorld);
					w.multiplyVector4(r.positionScreen);
					r.positionScreen.x /= r.positionScreen.w;
					r.positionScreen.y /= r.positionScreen.w;
					r.visible = r.positionScreen.z > a && r.positionScreen.z < l
				}
				for(b = 0, E = R.length; b < E; b++) {
					U = R[b];
					if(U instanceof THREE.Face3) {
						$ = s[U.a];
						J = s[U.b];
						K = s[U.c];
						if($.visible && J.visible && K.visible) {
							c = (K.positionScreen.x - $.positionScreen.x) * (J.positionScreen.y - $.positionScreen.y) - (K.positionScreen.y - $.positionScreen.y) * (J.positionScreen.x - $.positionScreen.x) < 0;
							if(D.doubleSided || c != D.flipSided) {
								o = L();
								o.v1.copy($);
								o.v2.copy(J);
								o.v3.copy(K)
							} else {
								continue
							}
						} else {
							continue
						}
					} else if(U instanceof THREE.Face4) {
						$ = s[U.a];
						J = s[U.b];
						K = s[U.c];
						Q = s[U.d];
						if($.visible && J.visible && K.visible && Q.visible) {
							c = (Q.positionScreen.x - $.positionScreen.x) * (J.positionScreen.y - $.positionScreen.y) - (Q.positionScreen.y - $.positionScreen.y) * (J.positionScreen.x - $.positionScreen.x) < 0 || (J.positionScreen.x - K.positionScreen.x) * (Q.positionScreen.y - K.positionScreen.y) - (J.positionScreen.y - K.positionScreen.y) * (Q.positionScreen.x - K.positionScreen.x) < 0;
							if(D.doubleSided || c != D.flipSided) {
								o = A();
								o.v1.copy($);
								o.v2.copy(J);
								o.v3.copy(K);
								o.v4.copy(Q)
							} else {
								continue
							}
						} else {
							continue
						}
					}
					o.normalWorld.copy(U.normal);
					if(!c && (D.flipSided || D.doubleSided)) o.normalWorld.negate();
					H.multiplyVector3(o.normalWorld);
					o.centroidWorld.copy(U.centroid);
					P.multiplyVector3(o.centroidWorld);
					o.centroidScreen.copy(o.centroidWorld);
					w.multiplyVector3(o.centroidScreen);
					z = U.vertexNormals;
					for(x = 0, T = z.length; x < T; x++) {
						W = o.vertexNormalsWorld[x];
						W.copy(z[x]);
						if(!c && (D.flipSided || D.doubleSided)) W.negate();
						H.multiplyVector3(W)
					}
					for(N = 0, C = X.length; N < C; N++) {
						V = X[N][b];
						if(!V) continue;
						for(M = 0, _ = V.length; M < _; M++) {
							o.uvs[N][M] = V[M]
						}
					}
					o.material = D.material;
					o.faceMaterial = U.materialIndex !== null ? j[U.materialIndex] : null;
					o.z = o.centroidScreen.z;
					g.elements.push(o)
				}
			}
		}
		n && g.elements.sort(O);
		return g
	}
};
THREE.Face3 = function(e, t, n, r, i, s) {
	this.a = e;
	this.b = t;
	this.c = n;
	this.normal = r instanceof THREE.Vector3 ? r : new THREE.Vector3;
	this.vertexNormals = r instanceof Array ? r : [];
	this.color = i instanceof THREE.Color ? i : new THREE.Color;
	this.vertexColors = i instanceof Array ? i : [];
	this.vertexTangents = [];
	this.materialIndex = s;
	this.centroid = new THREE.Vector3
};
THREE.Face3.prototype = {
	constructor: THREE.Face3,
	clone: function() {
		var e = new THREE.Face3(this.a, this.b, this.c);
		e.normal.copy(this.normal);
		e.color.copy(this.color);
		e.centroid.copy(this.centroid);
		e.materialIndex = this.materialIndex;
		var t, n;
		for(t = 0, n = this.vertexNormals.length; t < n; t++) e.vertexNormals[t] = this.vertexNormals[t].clone();
		for(t = 0, n = this.vertexColors.length; t < n; t++) e.vertexColors[t] = this.vertexColors[t].clone();
		for(t = 0, n = this.vertexTangents.length; t < n; t++) e.vertexTangents[t] = this.vertexTangents[t].clone();
		return e
	}
};
THREE.Face4 = function(e, t, n, r, i, s, o) {
	this.a = e;
	this.b = t;
	this.c = n;
	this.d = r;
	this.normal = i instanceof THREE.Vector3 ? i : new THREE.Vector3;
	this.vertexNormals = i instanceof Array ? i : [];
	this.color = s instanceof THREE.Color ? s : new THREE.Color;
	this.vertexColors = s instanceof Array ? s : [];
	this.vertexTangents = [];
	this.materialIndex = o;
	this.centroid = new THREE.Vector3
};
THREE.Face4.prototype = {
	constructor: THREE.Face4,
	clone: function() {
		var e = new THREE.Face4(this.a, this.b, this.c, this.d);
		e.normal.copy(this.normal);
		e.color.copy(this.color);
		e.centroid.copy(this.centroid);
		e.materialIndex = this.materialIndex;
		var t, n;
		for(t = 0, n = this.vertexNormals.length; t < n; t++) e.vertexNormals[t] = this.vertexNormals[t].clone();
		for(t = 0, n = this.vertexColors.length; t < n; t++) e.vertexColors[t] = this.vertexColors[t].clone();
		for(t = 0, n = this.vertexTangents.length; t < n; t++) e.vertexTangents[t] = this.vertexTangents[t].clone();
		return e
	}
};
THREE.UV = function(e, t) {
	this.u = e || 0;
	this.v = t || 0
};
THREE.UV.prototype = {
	constructor: THREE.UV,
	set: function(e, t) {
		this.u = e;
		this.v = t;
		return this
	},
	copy: function(e) {
		this.u = e.u;
		this.v = e.v;
		return this
	},
	lerpSelf: function(e, t) {
		this.u += (e.u - this.u) * t;
		this.v += (e.v - this.v) * t;
		return this
	},
	clone: function() {
		return new THREE.UV(this.u, this.v)
	}
};
THREE.Geometry = function() {
	this.id = THREE.GeometryCount++;
	this.vertices = [];
	this.colors = [];
	this.materials = [];
	this.faces = [];
	this.faceVertexUvs = [
		[]
	];
	this.morphTargets = [];
	this.morphNormals = [];
	this.boundingBox = null;
	this.boundingSphere = null;
	this.hasTangents = false;
	this.dynamic = false
};
THREE.Geometry.prototype = {
	constructor: THREE.Geometry,
	computeCentroids: function() {
		var e, t, n;
		for(e = 0, t = this.faces.length; e < t; e++) {
			n = this.faces[e];
			n.centroid.set(0, 0, 0);
			if(n instanceof THREE.Face3) {
				n.centroid.addSelf(this.vertices[n.a]);
				n.centroid.addSelf(this.vertices[n.b]);
				n.centroid.addSelf(this.vertices[n.c]);
				n.centroid.divideScalar(3)
			} else if(n instanceof THREE.Face4) {
				n.centroid.addSelf(this.vertices[n.a]);
				n.centroid.addSelf(this.vertices[n.b]);
				n.centroid.addSelf(this.vertices[n.c]);
				n.centroid.addSelf(this.vertices[n.d]);
				n.centroid.divideScalar(4)
			}
		}
	},
	computeBoundingSphere: function() {
		if(!this.boundingSphere) this.boundingSphere = {
			radius: 0
		};
		var e, t = 0;
		for(var n = 0, r = this.vertices.length; n < r; n++) {
			e = this.vertices[n].length();
			if(e > t) t = e
		}
		this.boundingSphere.radius = t
	},
	mergeVertices: function() {
		var e = {};
		var t = [],
			n = [];
		var r, i;
		var s = 4;
		var o = Math.pow(10, s);
		var u, a, f;
		var l = "abcd",
			c, h, p, d, v;
		for(u = 0, a = this.vertices.length; u < a; u++) {
			r = this.vertices[u];
			i = [Math.round(r.x * o), Math.round(r.y * o), Math.round(r.z * o)].join("_");
			if(e[i] === undefined) {
				e[i] = u;
				t.push(this.vertices[u]);
				n[u] = t.length - 1
			} else {
				n[u] = n[e[i]]
			}
		}
		for(u = 0, a = this.faces.length; u < a; u++) {
			f = this.faces[u];
			if(f instanceof THREE.Face3) {
				f.a = n[f.a];
				f.b = n[f.b];
				f.c = n[f.c]
			} else if(f instanceof THREE.Face4) {
				f.a = n[f.a];
				f.b = n[f.b];
				f.c = n[f.c];
				f.d = n[f.d];
				c = [f.a, f.b, f.c, f.d];
				for(h = 3; h > 0; h--) {
					if(c.indexOf(f[l[h]]) != h) {
						c.splice(h, 1);
						this.faces[u] = new THREE.Face3(c[0], c[1], c[2]);
						for(p = 0, d = this.faceVertexUvs.length; p < d; p++) {
							v = this.faceVertexUvs[p][u];
							if(v) v.splice(h, 1)
						}
						break
					}
				}
			}
		}
		var m = this.vertices.length - t.length;
		this.vertices = t;
		return m
	}
};
THREE.GeometryCount = 0;
THREE.Camera = function() {
	THREE.Object3D.call(this);
	this.matrixWorldInverse = new THREE.Matrix4;
	this.projectionMatrix = new THREE.Matrix4;
	this.projectionMatrixInverse = new THREE.Matrix4
};
THREE.Camera.prototype = new THREE.Object3D;
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.lookAt = function(e) {
	this.matrix.lookAt(this.position, e, this.up);
	if(this.rotationAutoUpdate) {
		this.rotation.getRotationFromMatrix(this.matrix)
	}
};
THREE.PerspectiveCamera = function(e, t, n, r) {
	THREE.Camera.call(this);
	this.fov = e !== undefined ? e : 50;
	this.aspect = t !== undefined ? t : 1;
	this.near = n !== undefined ? n : .1;
	this.far = r !== undefined ? r : 2e3;
	this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype = new THREE.Camera;
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens = function(e, t) {
	t = t !== undefined ? t : 24;
	this.fov = 2 * Math.atan(t / (e * 2)) * (180 / Math.PI);
	this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.setViewOffset = function(e, t, n, r, i, s) {
	this.fullWidth = e;
	this.fullHeight = t;
	this.x = n;
	this.y = r;
	this.width = i;
	this.height = s;
	this.updateProjectionMatrix()
};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
	if(this.fullWidth) {
		var e = this.fullWidth / this.fullHeight;
		var t = Math.tan(this.fov * Math.PI / 360) * this.near;
		var n = -t;
		var r = e * n;
		var i = e * t;
		var s = Math.abs(i - r);
		var o = Math.abs(t - n);
		this.projectionMatrix.makeFrustum(r + this.x * s / this.fullWidth, r + (this.x + this.width) * s / this.fullWidth, t - (this.y + this.height) * o / this.fullHeight, t - this.y * o / this.fullHeight, this.near, this.far)
	} else {
		this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
	}
};
THREE.Light = function(e) {
	THREE.Object3D.call(this);
	this.color = new THREE.Color(e)
};
THREE.Light.prototype = new THREE.Object3D;
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function(e) {
	THREE.Light.call(this, e)
};
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.PointLight = function(e, t, n) {
	THREE.Light.call(this, e);
	this.position = new THREE.Vector3(0, 0, 0);
	this.intensity = t !== undefined ? t : 1;
	this.distance = n !== undefined ? n : 0
};
THREE.PointLight.prototype = new THREE.Light;
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.Material = function(e) {
	e = e || {};
	this.id = THREE.MaterialCount++;
	this.name = "";
	this.opacity = e.opacity !== undefined ? e.opacity : 1;
	this.transparent = e.transparent !== undefined ? e.transparent : false;
	this.blending = e.blending !== undefined ? e.blending : THREE.NormalBlending;
	this.blendSrc = e.blendSrc !== undefined ? e.blendSrc : THREE.SrcAlphaFactor;
	this.blendDst = e.blendDst !== undefined ? e.blendDst : THREE.OneMinusSrcAlphaFactor;
	this.blendEquation = e.blendEquation !== undefined ? e.blendEquation : THREE.AddEquation;
	this.depthTest = e.depthTest !== undefined ? e.depthTest : true;
	this.depthWrite = e.depthWrite !== undefined ? e.depthWrite : true;
	this.polygonOffset = e.polygonOffset !== undefined ? e.polygonOffset : false;
	this.polygonOffsetFactor = e.polygonOffsetFactor !== undefined ? e.polygonOffsetFactor : 0;
	this.polygonOffsetUnits = e.polygonOffsetUnits !== undefined ? e.polygonOffsetUnits : 0;
	this.alphaTest = e.alphaTest !== undefined ? e.alphaTest : 0;
	this.overdraw = e.overdraw !== undefined ? e.overdraw : false;
	this.visible = true;
	this.needsUpdate = true
};
THREE.MaterialCount = 0;
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NormalBlending = 1;
THREE.AdditiveBlending = 2;
THREE.SubtractiveBlending = 3;
THREE.MultiplyBlending = 4;
THREE.AdditiveAlphaBlending = 5;
THREE.CustomBlending = 6;
THREE.AddEquation = 100;
THREE.SubtractEquation = 101;
THREE.ReverseSubtractEquation = 102;
THREE.MeshBasicMaterial = function(e) {
	THREE.Material.call(this, e);
	e = e || {};
	this.color = e.color !== undefined ? new THREE.Color(e.color) : new THREE.Color(16777215);
	this.map = e.map !== undefined ? e.map : null;
	this.lightMap = e.lightMap !== undefined ? e.lightMap : null;
	this.envMap = e.envMap !== undefined ? e.envMap : null;
	this.combine = e.combine !== undefined ? e.combine : THREE.MultiplyOperation;
	this.reflectivity = e.reflectivity !== undefined ? e.reflectivity : 1;
	this.refractionRatio = e.refractionRatio !== undefined ? e.refractionRatio : .98;
	this.fog = e.fog !== undefined ? e.fog : true;
	this.shading = e.shading !== undefined ? e.shading : THREE.SmoothShading;
	this.wireframe = e.wireframe !== undefined ? e.wireframe : false;
	this.wireframeLinewidth = e.wireframeLinewidth !== undefined ? e.wireframeLinewidth : 1;
	this.wireframeLinecap = e.wireframeLinecap !== undefined ? e.wireframeLinecap : "round";
	this.wireframeLinejoin = e.wireframeLinejoin !== undefined ? e.wireframeLinejoin : "round";
	this.vertexColors = e.vertexColors !== undefined ? e.vertexColors : THREE.NoColors;
	this.skinning = e.skinning !== undefined ? e.skinning : false;
	this.morphTargets = e.morphTargets !== undefined ? e.morphTargets : false
};
THREE.MeshBasicMaterial.prototype = new THREE.Material;
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial = function(e) {
	THREE.Material.call(this, e);
	e = e || {};
	this.color = e.color !== undefined ? new THREE.Color(e.color) : new THREE.Color(16777215);
	this.ambient = e.ambient !== undefined ? new THREE.Color(e.ambient) : new THREE.Color(16777215);
	this.emissive = e.emissive !== undefined ? new THREE.Color(e.emissive) : new THREE.Color(0);
	this.wrapAround = e.wrapAround !== undefined ? e.wrapAround : false;
	this.wrapRGB = new THREE.Vector3(1, 1, 1);
	this.map = e.map !== undefined ? e.map : null;
	this.lightMap = e.lightMap !== undefined ? e.lightMap : null;
	this.envMap = e.envMap !== undefined ? e.envMap : null;
	this.combine = e.combine !== undefined ? e.combine : THREE.MultiplyOperation;
	this.reflectivity = e.reflectivity !== undefined ? e.reflectivity : 1;
	this.refractionRatio = e.refractionRatio !== undefined ? e.refractionRatio : .98;
	this.fog = e.fog !== undefined ? e.fog : true;
	this.shading = e.shading !== undefined ? e.shading : THREE.SmoothShading;
	this.wireframe = e.wireframe !== undefined ? e.wireframe : false;
	this.wireframeLinewidth = e.wireframeLinewidth !== undefined ? e.wireframeLinewidth : 1;
	this.wireframeLinecap = e.wireframeLinecap !== undefined ? e.wireframeLinecap : "round";
	this.wireframeLinejoin = e.wireframeLinejoin !== undefined ? e.wireframeLinejoin : "round";
	this.vertexColors = e.vertexColors !== undefined ? e.vertexColors : THREE.NoColors;
	this.skinning = e.skinning !== undefined ? e.skinning : false;
	this.morphTargets = e.morphTargets !== undefined ? e.morphTargets : false;
	this.morphNormals = e.morphNormals !== undefined ? e.morphNormals : false
};
THREE.MeshLambertMaterial.prototype = new THREE.Material;
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshNormalMaterial = function(e) {
	THREE.Material.call(this, e);
	e = e || {};
	this.shading = e.shading ? e.shading : THREE.FlatShading;
	this.wireframe = e.wireframe ? e.wireframe : false;
	this.wireframeLinewidth = e.wireframeLinewidth ? e.wireframeLinewidth : 1
};
THREE.MeshNormalMaterial.prototype = new THREE.Material;
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshFaceMaterial = function() {};
THREE.Texture = function(e, t, n, r, i, s, o, u) {
	this.id = THREE.TextureCount++;
	this.image = e;
	this.mapping = t !== undefined ? t : new THREE.UVMapping;
	this.wrapS = n !== undefined ? n : THREE.ClampToEdgeWrapping;
	this.wrapT = r !== undefined ? r : THREE.ClampToEdgeWrapping;
	this.magFilter = i !== undefined ? i : THREE.LinearFilter;
	this.minFilter = s !== undefined ? s : THREE.LinearMipMapLinearFilter;
	this.format = o !== undefined ? o : THREE.RGBAFormat;
	this.type = u !== undefined ? u : THREE.UnsignedByteType;
	this.offset = new THREE.Vector2(0, 0);
	this.repeat = new THREE.Vector2(1, 1);
	this.generateMipmaps = true;
	this.premultiplyAlpha = false;
	this.needsUpdate = false;
	this.onUpdate = null
};
THREE.Texture.prototype = {
	constructor: THREE.Texture,
	clone: function() {
		var e = new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter, this.format, this.type);
		e.offset.copy(this.offset);
		e.repeat.copy(this.repeat);
		return e
	}
};
THREE.TextureCount = 0;
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.UVMapping = function() {};
THREE.CubeReflectionMapping = function() {};
THREE.CubeRefractionMapping = function() {};
THREE.SphericalReflectionMapping = function() {};
THREE.SphericalRefractionMapping = function() {};
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.DataTexture = function(e, t, n, r, i, s, o, u, a, f) {
	THREE.Texture.call(this, null, s, o, u, a, f, r, i);
	this.image = {
		data: e,
		width: t,
		height: n
	}
};
THREE.DataTexture.prototype = new THREE.Texture;
THREE.DataTexture.prototype.constructor = THREE.DataTexture;
THREE.DataTexture.prototype.clone = function() {
	var e = new THREE.DataTexture(this.image.data, this.image.width, this.image.height, this.format, this.type, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter);
	e.offset.copy(this.offset);
	e.repeat.copy(this.repeat);
	return e
};
THREE.Mesh = function(e, t) {
	THREE.Object3D.call(this);
	this.geometry = e;
	this.material = t !== undefined ? t : new THREE.MeshBasicMaterial({
		color: Math.random() * 16777215,
		wireframe: true
	});
	if(this.geometry) {
		if(!this.geometry.boundingSphere) {
			this.geometry.computeBoundingSphere()
		}
		this.boundRadius = e.boundingSphere.radius;
		if(this.geometry.morphTargets.length) {
			this.morphTargetBase = -1;
			this.morphTargetForcedOrder = [];
			this.morphTargetInfluences = [];
			this.morphTargetDictionary = {};
			for(var n = 0; n < this.geometry.morphTargets.length; n++) {
				this.morphTargetInfluences.push(0);
				this.morphTargetDictionary[this.geometry.morphTargets[n].name] = n
			}
		}
	}
};
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Scene = function() {
	THREE.Object3D.call(this);
	this.fog = null;
	this.overrideMaterial = null;
	this.matrixAutoUpdate = false;
	this.__objects = [];
	this.__lights = [];
	this.__objectsAdded = [];
	this.__objectsRemoved = []
};
THREE.Scene.prototype = new THREE.Object3D;
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.__addObject = function(e) {
	if(e instanceof THREE.Light) {
		if(this.__lights.indexOf(e) === -1) {
			this.__lights.push(e)
		}
	} else if(!(e instanceof THREE.Camera)) {
		if(this.__objects.indexOf(e) === -1) {
			this.__objects.push(e);
			this.__objectsAdded.push(e);
			var t = this.__objectsRemoved.indexOf(e);
			if(t !== -1) {
				this.__objectsRemoved.splice(t, 1)
			}
		}
	}
	for(var n = 0; n < e.children.length; n++) {
		this.__addObject(e.children[n])
	}
};
THREE.Scene.prototype.__removeObject = function(e) {
	if(e instanceof THREE.Light) {
		var t = this.__lights.indexOf(e);
		if(t !== -1) {
			this.__lights.splice(t, 1)
		}
	} else if(!(e instanceof THREE.Camera)) {
		var t = this.__objects.indexOf(e);
		if(t !== -1) {
			this.__objects.splice(t, 1);
			this.__objectsRemoved.push(e);
			var n = this.__objectsAdded.indexOf(e);
			if(n !== -1) {
				this.__objectsAdded.splice(n, 1)
			}
		}
	}
	for(var r = 0; r < e.children.length; r++) {
		this.__removeObject(e.children[r])
	}
};
THREE.CanvasRenderer = function(e) {
	function yt(e) {
		if(d != e) {
			c.globalAlpha = d = e
		}
	}

	function bt(e) {
		if(y != e) {
			c.lineWidth = y = e
		}
	}

	function wt(e) {
		if(b != e) {
			c.lineCap = b = e
		}
	}

	function Et(e) {
		if(w != e) {
			c.lineJoin = w = e
		}
	}

	function St(e) {
		if(m != e) {
			c.strokeStyle = m = e
		}
	}

	function xt(e) {
		if(g != e) {
			c.fillStyle = g = e
		}
	}
	e = e || {};
	var t = this,
		n, r, i, s = new THREE.Projector,
		o = e.canvas !== undefined ? e.canvas : document.createElement("canvas"),
		u, a, f, l, c = o.getContext("2d"),
		h = new THREE.Color(0),
		p = 0,
		d = 1,
		v = 0,
		m = null,
		g = null,
		y = null,
		b = null,
		w = null,
		E, S, x, T, N = new THREE.RenderableVertex,
		C = new THREE.RenderableVertex,
		k, L, A, O, M, _, D, P, H, B, j, F, I = new THREE.Color,
		q = new THREE.Color,
		R = new THREE.Color,
		U = new THREE.Color,
		z = new THREE.Color,
		W = [],
		X = [],
		V, $, J, K, Q, G, Y, Z, et, tt, nt = new THREE.Rectangle,
		rt = new THREE.Rectangle,
		it = new THREE.Rectangle,
		st = false,
		ot = new THREE.Color,
		ut = new THREE.Color,
		at = new THREE.Color,
		ft = Math.PI * 2,
		lt = new THREE.Vector3,
		ct, ht, pt, dt, vt, mt, gt = 16;
	ct = document.createElement("canvas");
	ct.width = ct.height = 2;
	ht = ct.getContext("2d");
	ht.fillStyle = "rgba(0,0,0,1)";
	ht.fillRect(0, 0, 2, 2);
	pt = ht.getImageData(0, 0, 2, 2);
	dt = pt.data;
	vt = document.createElement("canvas");
	vt.width = vt.height = gt;
	mt = vt.getContext("2d");
	mt.translate(-gt / 2, -gt / 2);
	mt.scale(gt, gt);
	gt--;
	this.domElement = o;
	this.autoClear = true;
	this.sortObjects = true;
	this.sortElements = true;
	this.info = {
		render: {
			vertices: 0,
			faces: 0
		}
	};
	this.setSize = function(e, t) {
		u = e;
		a = t;
		f = Math.floor(u / 2);
		l = Math.floor(a / 2);
		o.width = u;
		o.height = a;
		nt.set(-f, -l, f, l);
		rt.set(-f, -l, f, l);
		d = 1;
		v = 0;
		m = null;
		g = null;
		y = null;
		b = null;
		w = null
	};
	this.setClearColor = function(e, t) {
		h.copy(e);
		p = t !== undefined ? t : 1;
		rt.set(-f, -l, f, l)
	};
	this.setClearColorHex = function(e, t) {
		h.setHex(e);
		p = t !== undefined ? t : 1;
		rt.set(-f, -l, f, l)
	};
	this.clear = function() {
		c.setTransform(1, 0, 0, -1, f, l);
		if(!rt.isEmpty()) {
			rt.minSelf(nt);
			rt.inflate(2);
			if(p < 1) {
				c.clearRect(Math.floor(rt.getX()), Math.floor(rt.getY()), Math.floor(rt.getWidth()), Math.floor(rt.getHeight()))
			}
			if(p > 0) {
				setBlending(THREE.NormalBlending);
				yt(1);
				xt("rgba(" + Math.floor(h.r * 255) + "," + Math.floor(h.g * 255) + "," + Math.floor(h.b * 255) + "," + p + ")");
				c.fillRect(Math.floor(rt.getX()), Math.floor(rt.getY()), Math.floor(rt.getWidth()), Math.floor(rt.getHeight()))
			}
			rt.empty()
		}
	};
	this.render = function(e, o) {
		function d(e) {
			var t, n, r, i;
			ot.setRGB(0, 0, 0);
			ut.setRGB(0, 0, 0);
			at.setRGB(0, 0, 0);
			for(t = 0, n = e.length; t < n; t++) {
				r = e[t];
				i = r.color;
				if(r instanceof THREE.AmbientLight) {
					ot.r += i.r;
					ot.g += i.g;
					ot.b += i.b
				} else if(r instanceof THREE.PointLight) {
					at.r += i.r;
					at.g += i.g;
					at.b += i.b
				}
			}
		}

		function v(e, t, n, r) {
			var i, s, o, u, a, f;
			for(i = 0, s = e.length; i < s; i++) {
				o = e[i];
				u = o.color;
				if(o instanceof THREE.PointLight) {
					a = o.matrixWorld.getPosition();
					f = n.dot(lt.sub(a, t).normalize());
					if(f <= 0) continue;
					f *= o.distance == 0 ? 1 : 1 - Math.min(t.distanceTo(a) / o.distance, 1);
					if(f == 0) continue;
					f *= o.intensity;
					r.r += u.r * f;
					r.g += u.g * f;
					r.b += u.b * f
				}
			}
		}

		function m(e, n, r, i, s, u, a, f, l) {
			t.info.render.vertices += 3;
			t.info.render.faces++;
			k = e.positionScreen.x;
			L = e.positionScreen.y;
			A = n.positionScreen.x;
			O = n.positionScreen.y;
			M = r.positionScreen.x;
			_ = r.positionScreen.y;
			y(k, L, A, O, M, _);
			if(f instanceof THREE.MeshBasicMaterial) {
				if(f.map) {
					if(f.map.mapping instanceof THREE.UVMapping) {
						K = a.uvs[0];
						$(k, L, A, O, M, _, K[i].u, K[i].v, K[s].u, K[s].v, K[u].u, K[u].v, f.map)
					}
				} else if(f.envMap) {
					if(f.envMap.mapping instanceof THREE.SphericalReflectionMapping) {
						var c = o.matrixWorldInverse;
						lt.copy(a.vertexNormalsWorld[i]);
						Q = (lt.x * c.elements[0] + lt.y * c.elements[4] + lt.z * c.elements[8]) * .5 + .5;
						G = -(lt.x * c.elements[1] + lt.y * c.elements[5] + lt.z * c.elements[9]) * .5 + .5;
						lt.copy(a.vertexNormalsWorld[s]);
						Y = (lt.x * c.elements[0] + lt.y * c.elements[4] + lt.z * c.elements[8]) * .5 + .5;
						Z = -(lt.x * c.elements[1] + lt.y * c.elements[5] + lt.z * c.elements[9]) * .5 + .5;
						lt.copy(a.vertexNormalsWorld[u]);
						et = (lt.x * c.elements[0] + lt.y * c.elements[4] + lt.z * c.elements[8]) * .5 + .5;
						tt = -(lt.x * c.elements[1] + lt.y * c.elements[5] + lt.z * c.elements[9]) * .5 + .5;
						$(k, L, A, O, M, _, Q, G, Y, Z, et, tt, f.envMap)
					}
				} else {
					f.wireframe ? w(f.color, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : V(f.color)
				}
			}
		}

		function g(e, n, r, s, o, u, a, f, l) {
			t.info.render.vertices += 4;
			t.info.render.faces++;
			if(f.map || f.envMap) {
				m(e, n, s, 0, 1, 3, a, f, l);
				m(o, r, u, 1, 2, 3, a, f, l);
				return
			}
			k = e.positionScreen.x;
			L = e.positionScreen.y;
			A = n.positionScreen.x;
			O = n.positionScreen.y;
			M = r.positionScreen.x;
			_ = r.positionScreen.y;
			D = s.positionScreen.x;
			P = s.positionScreen.y;
			H = o.positionScreen.x;
			B = o.positionScreen.y;
			j = u.positionScreen.x;
			F = u.positionScreen.y;
			if(f instanceof THREE.MeshBasicMaterial) {
				b(k, L, A, O, M, _, D, P);
				f.wireframe ? w(f.color, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : V(f.color)
			} else if(f instanceof THREE.MeshLambertMaterial) {
				if(st) {
					if(!f.wireframe && f.shading == THREE.SmoothShading && a.vertexNormalsWorld.length == 4) {
						q.r = R.r = U.r = z.r = ot.r;
						q.g = R.g = U.g = z.g = ot.g;
						q.b = R.b = U.b = z.b = ot.b;
						v(i, a.v1.positionWorld, a.vertexNormalsWorld[0], q);
						v(i, a.v2.positionWorld, a.vertexNormalsWorld[1], R);
						v(i, a.v4.positionWorld, a.vertexNormalsWorld[3], U);
						v(i, a.v3.positionWorld, a.vertexNormalsWorld[2], z);
						q.r = Math.max(0, Math.min(f.color.r * q.r, 1));
						q.g = Math.max(0, Math.min(f.color.g * q.g, 1));
						q.b = Math.max(0, Math.min(f.color.b * q.b, 1));
						R.r = Math.max(0, Math.min(f.color.r * R.r, 1));
						R.g = Math.max(0, Math.min(f.color.g * R.g, 1));
						R.b = Math.max(0, Math.min(f.color.b * R.b, 1));
						U.r = Math.max(0, Math.min(f.color.r * U.r, 1));
						U.g = Math.max(0, Math.min(f.color.g * U.g, 1));
						U.b = Math.max(0, Math.min(f.color.b * U.b, 1));
						z.r = Math.max(0, Math.min(f.color.r * z.r, 1));
						z.g = Math.max(0, Math.min(f.color.g * z.g, 1));
						z.b = Math.max(0, Math.min(f.color.b * z.b, 1));
						J = getGradientTexture(q, R, U, z);
						y(k, L, A, O, D, P);
						clipImage(k, L, A, O, D, P, 0, 0, 1, 0, 0, 1, J);
						y(H, B, M, _, j, F);
						clipImage(H, B, M, _, j, F, 1, 0, 1, 1, 0, 1, J)
					} else {
						I.r = ot.r;
						I.g = ot.g;
						I.b = ot.b;
						v(i, a.centroidWorld, a.normalWorld, I);
						I.r = Math.max(0, Math.min(f.color.r * I.r, 1));
						I.g = Math.max(0, Math.min(f.color.g * I.g, 1));
						I.b = Math.max(0, Math.min(f.color.b * I.b, 1));
						b(k, L, A, O, M, _, D, P);
						f.wireframe ? w(I, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : V(I)
					}
				} else {
					b(k, L, A, O, M, _, D, P);
					f.wireframe ? w(f.color, f.wireframeLinewidth, f.wireframeLinecap, f.wireframeLinejoin) : V(f.color)
				}
			}
		}

		function y(e, t, n, r, i, s) {
			c.beginPath();
			c.moveTo(e, t);
			c.lineTo(n, r);
			c.lineTo(i, s);
			c.lineTo(e, t);
			c.closePath()
		}

		function b(e, t, n, r, i, s, o, u) {
			c.beginPath();
			c.moveTo(e, t);
			c.lineTo(n, r);
			c.lineTo(i, s);
			c.lineTo(o, u);
			c.lineTo(e, t);
			c.closePath()
		}

		function w(e, t, n, r) {
			bt(t);
			wt(n);
			Et(r);
			St(e.getContextStyle());
			c.stroke();
			it.inflate(t * 2)
		}

		function V(e) {
			xt(e.getContextStyle());
			c.fill()
		}

		function $(e, t, n, r, i, s, o, u, a, f, l, h, p) {
			if(p.image.width == 0) return;
			if(p.needsUpdate == true || W[p.id] == undefined) {
				var d = p.wrapS == THREE.RepeatWrapping;
				var v = p.wrapT == THREE.RepeatWrapping;
				W[p.id] = c.createPattern(p.image, d && v ? "repeat" : d && !v ? "repeat-x" : !d && v ? "repeat-y" : "no-repeat");
				p.needsUpdate = false
			}
			xt(W[p.id]);
			var m, g, y, b, w, E, S, x, T = p.offset.x / p.repeat.x,
				N = p.offset.y / p.repeat.y,
				C = p.image.width * p.repeat.x,
				k = p.image.height * p.repeat.y;
			o = (o + T) * C;
			u = (u + N) * k;
			a = (a + T) * C;
			f = (f + N) * k;
			l = (l + T) * C;
			h = (h + N) * k;
			n -= e;
			r -= t;
			i -= e;
			s -= t;
			a -= o;
			f -= u;
			l -= o;
			h -= u;
			S = a * h - l * f;
			if(S == 0) {
				if(X[p.id] === undefined) {
					var L = document.createElement("canvas");
					L.width = p.image.width;
					L.height = p.image.height;
					var A = L.getContext("2d");
					A.drawImage(p.image, 0, 0);
					X[p.id] = A.getImageData(0, 0, p.image.width, p.image.height).data
				}
				var O = X[p.id];
				var M = (Math.floor(o) + Math.floor(u) * p.image.width) * 4;
				I.setRGB(O[M] / 255, O[M + 1] / 255, O[M + 2] / 255);
				V(I);
				return
			}
			x = 1 / S;
			m = (h * n - f * i) * x;
			g = (h * r - f * s) * x;
			y = (a * i - l * n) * x;
			b = (a * s - l * r) * x;
			w = e - m * o - y * u;
			E = t - g * o - b * u;
			c.save();
			c.transform(m, g, y, b, w, E);
			if(THREE.removeGaps) c.drawImage(p.image, 0, 0);
			else c.fill();
			c.restore()
		}

		function ft(e, t, n) {
			var r = (e - t) / (n - t);
			return r * r * (3 - 2 * r)
		}

		function ct(e) {
			var t = (e + 1) * .5;
			return t < 0 ? 0 : t > 1 ? 1 : t
		}

		function ht(e, t) {
			if(THREE.removeGaps) return;
			var n = t.x - e.x,
				r = t.y - e.y,
				i = n * n + r * r,
				s;
			if(i == 0) return;
			s = 1 / Math.sqrt(i) / 2;
			n *= s;
			r *= s;
			t.x += n;
			t.y += r;
			e.x -= n;
			e.y -= r
		}
		var u, a, h, p;
		this.autoClear ? this.clear() : c.setTransform(1, 0, 0, -1, f, l);
		t.info.render.vertices = 0;
		t.info.render.faces = 0;
		n = s.projectScene(e, o, this.sortElements);
		r = n.elements;
		i = n.lights;
		st = i.length > 0;
		if(st) {
			d(i)
		}
		for(u = 0, a = r.length; u < a; u++) {
			h = r[u];
			p = h.material;
			p = p instanceof THREE.MeshFaceMaterial ? h.faceMaterial : p;
			if(p === undefined || p.visible === false) continue;
			it.empty();
			if(h instanceof THREE.RenderableLine) {
				E = h.v1;
				S = h.v2;
				E.positionScreen.x *= f;
				E.positionScreen.y *= l;
				S.positionScreen.x *= f;
				S.positionScreen.y *= l;
				it.addPoint(E.positionScreen.x, E.positionScreen.y);
				it.addPoint(S.positionScreen.x, S.positionScreen.y);
				if(nt.intersects(it)) {
					renderLine(E, S, h, p, e)
				}
			} else if(h instanceof THREE.RenderableFace3) {
				E = h.v1;
				S = h.v2;
				x = h.v3;
				E.positionScreen.x *= f;
				E.positionScreen.y *= l;
				S.positionScreen.x *= f;
				S.positionScreen.y *= l;
				x.positionScreen.x *= f;
				x.positionScreen.y *= l;
				if(p.overdraw) {
					ht(E.positionScreen, S.positionScreen);
					ht(S.positionScreen, x.positionScreen);
					ht(x.positionScreen, E.positionScreen)
				}
				it.add3Points(E.positionScreen.x, E.positionScreen.y, S.positionScreen.x, S.positionScreen.y, x.positionScreen.x, x.positionScreen.y);
				if(nt.intersects(it)) {
					m(E, S, x, 0, 1, 2, h, p, e)
				}
			} else if(h instanceof THREE.RenderableFace4) {
				E = h.v1;
				S = h.v2;
				x = h.v3;
				T = h.v4;
				E.positionScreen.x *= f;
				E.positionScreen.y *= l;
				S.positionScreen.x *= f;
				S.positionScreen.y *= l;
				x.positionScreen.x *= f;
				x.positionScreen.y *= l;
				T.positionScreen.x *= f;
				T.positionScreen.y *= l;
				N.positionScreen.copy(S.positionScreen);
				C.positionScreen.copy(T.positionScreen);
				if(p.overdraw) {
					ht(E.positionScreen, S.positionScreen);
					ht(S.positionScreen, T.positionScreen);
					ht(T.positionScreen, E.positionScreen);
					ht(x.positionScreen, N.positionScreen);
					ht(x.positionScreen, C.positionScreen)
				}
				it.addPoint(E.positionScreen.x, E.positionScreen.y);
				it.addPoint(S.positionScreen.x, S.positionScreen.y);
				it.addPoint(x.positionScreen.x, x.positionScreen.y);
				it.addPoint(T.positionScreen.x, T.positionScreen.y);
				if(nt.intersects(it)) {
					g(E, S, x, T, N, C, h, p, e)
				}
			}
			rt.addRectangle(it)
		}
		c.setTransform(1, 0, 0, 1, 0, 0)
	}
};
THREE.RenderableVertex = function() {
	this.positionWorld = new THREE.Vector3;
	this.positionScreen = new THREE.Vector4;
	this.visible = true
};
THREE.RenderableVertex.prototype.copy = function(e) {
	this.positionWorld.copy(e.positionWorld);
	this.positionScreen.copy(e.positionScreen)
};
THREE.RenderableFace3 = function() {
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.v3 = new THREE.RenderableVertex;
	this.centroidWorld = new THREE.Vector3;
	this.centroidScreen = new THREE.Vector3;
	this.normalWorld = new THREE.Vector3;
	this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
	this.material = null;
	this.faceMaterial = null;
	this.uvs = [
		[]
	];
	this.z = null
};
THREE.RenderableFace4 = function() {
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.v3 = new THREE.RenderableVertex;
	this.v4 = new THREE.RenderableVertex;
	this.centroidWorld = new THREE.Vector3;
	this.centroidScreen = new THREE.Vector3;
	this.normalWorld = new THREE.Vector3;
	this.vertexNormalsWorld = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
	this.material = null;
	this.faceMaterial = null;
	this.uvs = [
		[]
	];
	this.z = null
};
THREE.RenderableObject = function() {
	this.object = null;
	this.z = null
};
THREE.RenderableLine = function() {
	this.z = null;
	this.v1 = new THREE.RenderableVertex;
	this.v2 = new THREE.RenderableVertex;
	this.material = null
};
THREE.CubeGeometry = function(e, t, n, r, i, s, o, u) {
	function w(e, t, n, o, u, f, l, c) {
		var h, p, d, v = r || 1,
			m = i || 1,
			g = u / 2,
			y = f / 2,
			b = a.vertices.length;
		if(e === "x" && t === "y" || e === "y" && t === "x") {
			h = "z"
		} else if(e === "x" && t === "z" || e === "z" && t === "x") {
			h = "y";
			m = s || 1
		} else if(e === "z" && t === "y" || e === "y" && t === "z") {
			h = "x";
			v = s || 1
		}
		var w = v + 1,
			E = m + 1,
			S = u / v,
			x = f / m,
			T = new THREE.Vector3;
		T[h] = l > 0 ? 1 : -1;
		for(d = 0; d < E; d++) {
			for(p = 0; p < w; p++) {
				var N = new THREE.Vector3;
				N[e] = (p * S - g) * n;
				N[t] = (d * x - y) * o;
				N[h] = l;
				a.vertices.push(N)
			}
		}
		for(d = 0; d < m; d++) {
			for(p = 0; p < v; p++) {
				var C = p + w * d;
				var k = p + w * (d + 1);
				var L = p + 1 + w * (d + 1);
				var A = p + 1 + w * d;
				var O = new THREE.Face4(C + b, k + b, L + b, A + b);
				O.normal.copy(T);
				O.vertexNormals.push(T.clone(), T.clone(), T.clone(), T.clone());
				O.materialIndex = c;
				a.faces.push(O);
				a.faceVertexUvs[0].push([new THREE.UV(p / v, d / m), new THREE.UV(p / v, (d + 1) / m), new THREE.UV((p + 1) / v, (d + 1) / m), new THREE.UV((p + 1) / v, d / m)])
			}
		}
	}
	THREE.Geometry.call(this);
	var a = this,
		f = e / 2,
		l = t / 2,
		c = n / 2;
	var h, p, d, v, m, g;
	if(o !== undefined) {
		if(o instanceof Array) {
			this.materials = o
		} else {
			this.materials = [];
			for(var y = 0; y < 6; y++) {
				this.materials.push(o)
			}
		}
		h = 0;
		v = 1;
		p = 2;
		m = 3;
		d = 4;
		g = 5
	} else {
		this.materials = []
	}
	this.sides = {
		px: true,
		nx: true,
		py: true,
		ny: true,
		pz: true,
		nz: true
	};
	if(u != undefined) {
		for(var b in u) {
			if(this.sides[b] !== undefined) {
				this.sides[b] = u[b]
			}
		}
	}
	this.sides.px && w("z", "y", -1, -1, n, t, f, h);
	this.sides.nx && w("z", "y", 1, -1, n, t, -f, v);
	this.sides.py && w("x", "z", 1, 1, e, n, l, p);
	this.sides.ny && w("x", "z", 1, -1, e, n, -l, m);
	this.sides.pz && w("x", "y", 1, -1, e, t, c, d);
	this.sides.nz && w("x", "y", -1, -1, e, t, -c, g);
	this.computeCentroids();
	this.mergeVertices()
};
THREE.CubeGeometry.prototype = new THREE.Geometry;
THREE.CubeGeometry.prototype.constructor = THREE.CubeGeometry;
Aroma.CanvasTools = {};
Aroma.CanvasTools.createBitmapSlice = function(e, t) {
	var n = document.createElement("canvas");
	n.setAttribute("width", e.width);
	n.setAttribute("height", e.height);
	var r = n.getContext("2d");
	r.drawImage(t, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height);
	return n
};
Aroma.CanvasTools.resizeImage = function(e, t, n) {
	var r = document.createElement("canvas");
	r.setAttribute("width", Math.floor(n.width) + 1);
	r.setAttribute("height", Math.floor(n.height) + 1);
	var i = r.getContext("2d");
	i.drawImage(e, 0, 0, t.width, t.height, 0, 0, n.width, n.height);
	return r
};
Aroma.CanvasTools.flip = function(e, t, n, r) {
	if(!n && !r) return;
	var i = e.getContext("2d");
	i.save();
	i.translate(n ? t.width : 0, r ? t.height : 0);
	i.scale(n ? -1 : 1, r ? -1 : 1);
	i.drawImage(e, 0, 0);
	i.restore()
};
Aroma.ThreeView = function(e, t) {
	Aroma.AbstractView.call(this, e, t);
	this.sort = true;
	this.needRendering = true;
	this.viewport = document.createElement("canvas");
	this.viewport_cx = this.viewport.getContext("2d");
	this.renderer = new THREE.CanvasRenderer({
		canvas: this.viewport
	});
	this.renderer.autoClear = false;
	THREE.removeGaps = e > 3 && t > 3
};
Aroma.ThreeView.prototype = new Aroma.AbstractView;
Aroma.ThreeView.prototype.constructor = Aroma.ThreeView;
Aroma.ThreeView.prototype.setup = function() {
	var e = 1500;
	var t = 2 * Math.atan(this.vpHeight / (2 * e)) * 180 / Math.PI;
	this.camera = new THREE.PerspectiveCamera(t, this.vpWidth / this.vpHeight, .1, 1e4);
	this.camera.position.z = e;
	var n = new Image;
	n.src = this.oldSource.src;
	var r = {
		width: n.width,
		height: n.height
	};
	n = null;
	this.oldSource = Aroma.CanvasTools.resizeImage(this.oldSource, r, {
		width: this.width,
		height: this.height
	});
	this.newSource = Aroma.CanvasTools.resizeImage(this.newSource, r, {
		width: this.width,
		height: this.height
	})
};
Aroma.ThreeView.prototype.setViewPortSize = function(e, t) {
	Aroma.AbstractView.prototype.setViewPortSize.call(this, e, t);
	this.renderer.setSize(e, t)
};
Aroma.ThreeView.prototype.getPieceAt = function(e, t, n) {
	var r = this.posToID(e, t);
	if(this._pieceList[r] != null) return this._pieceList[r];
	var i = new Aroma.ThreeCubePiece;
	var s = this.getPieceBounds(e, t);
	i.col = e;
	i.row = t;
	i.bounds = s;
	i.view = this;
	n.piece = i;
	ConcatObject.concat(i.options, n.getPieceOptions());
	i.setup(Aroma.CanvasTools.createBitmapSlice(s, this.newSource), Aroma.CanvasTools.createBitmapSlice(s, this.oldSource));
	this._pieceList[r] = i;
	return i
};
Aroma.ThreeView.prototype.dispose = function() {
	Aroma.AbstractView.prototype.dispose.call(this);
	this.renderer.clear()
};
Aroma.ThreeView.prototype.render = function() {
	this.renderer.clear();
	this.viewport_cx.clearRect(0, 0, this.vpWidth, this.vpHeight);
	for(var e = 0, t = this._pieceList.length; e < t; ++e) this.renderer.render(this._pieceList[e].scene, this.camera)
};
Aroma.ThreeCubePiece = function() {
	Aroma.Piece.call(this);
	this.depth = 0;
	this.options = {
		flipX: false,
		flipY: false,
		fillSides: true,
		sideColor: 3355443,
		newImageLocation: 5,
		depth: 800
	};
	this.side_dic = {
		right: 0,
		front: 4,
		left: 1,
		back: 5,
		top: 2,
		bottom: 3
	}
};
Aroma.ThreeCubePiece.prototype = new Aroma.Piece;
Aroma.ThreeCubePiece.prototype.constructor = Aroma.ThreeCubePiece;
Aroma.ThreeCubePiece.prototype.setup = function(e, t, n) {
	this.proxy = {
		x: 0,
		y: 0,
		z: 0,
		rotationX: 0,
		rotationY: 0,
		rotationZ: 0,
		piece: this
	};
	this.newSource = e;
	this.oldSource = t;
	this.depth = n || this.options.depth;
	this.scene = new THREE.Scene;
	this.scene.add(this.view.camera);
	light1 = new THREE.PointLight(16777215, .3, 11e4);
	light1.position.z = 500;
	light1.position.x = 0;
	light1.position.y = 0;
	light2 = new THREE.AmbientLight(this.options.sideColor);
	this.scene.add(light2);
	this.scene.add(light1);
	var r = [];
	Aroma.CanvasTools.flip(this.newSource, this.bounds, this.options.flipX, this.options.flipY);
	for(var i = 0; i < 6; ++i) {
		if(i == 4) r.push(new THREE.MeshBasicMaterial({
			map: new THREE.Texture(t),
			overdraw: true
		}));
		else if(i == this.options.newImageLocation) r.push(new THREE.MeshBasicMaterial({
			map: new THREE.Texture(e),
			overdraw: true
		}));
		else r.push(new THREE.MeshLambertMaterial({
			shading: THREE.FlatShading,
			overdraw: true
		}))
	}
	var s = new THREE.CubeGeometry(this.bounds.width, this.bounds.height, this.depth, 1, 1, 1, r);
	this.cube = new THREE.Mesh(s, new THREE.MeshFaceMaterial);
	this.cube.position.x = this.origin_x = -this.view.width / 2 + this.bounds.x + this.bounds.width / 2;
	this.cube.position.y = this.origin_y = this.view.height / 2 - this.bounds.y - this.bounds.height / 2;
	this.cube.position.z = this.origin_z = -this.depth >> 1;
	this.scene.add(this.cube)
};
Aroma.ThreeCubePiece.prototype.dispose = function() {
	this.scene.remove(this.cube);
	this.cube = null;
	this.scene = null;
	this.proxy = null
};
Aroma.ThreeCubePiece.prototype.proxyUpdate = function() {
	this.piece.cube.position.x = this.x + this.piece.origin_x;
	this.piece.cube.position.y = -this.y + this.piece.origin_y;
	this.piece.cube.position.z = this.z + this.piece.origin_z;
	this.piece.cube.rotation.x = this.rotationX * Math.PI / 180;
	this.piece.cube.rotation.y = -this.rotationY * Math.PI / 180;
	this.piece.cube.rotation.z = -this.rotationZ * Math.PI / 180
}