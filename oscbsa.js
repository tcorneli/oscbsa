/**
 *  Open Source Contract Bridge Scoring API: an API for scoring contract bridge contests
 *  Copyright (C) 2015  Tom Cornelis
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var OSCBSA = OSCBSA || {};

/**
 * a very general class to group boards and participants
 */
OSCBSA.Set = function(type, values) {
	this.type = type; // String
	this.values = values; // Array
};

/**
 * assigns a value for a given set
 */
OSCBSA.Group = function(set, value) {
	this.set = set; // Set
	this.value = value; // String
	this.items = [];
}
OSCBSA.Group.prototype.addItem(item) {
	if(this.items.indexOf(item) < 0) {
		this.items.push(item);
	}
}
OSCBSA.Group.prototype.removeItem(item) {
	var index = this.items.indexOf(item);
	if(index >= 0) {
		this.items.splice(index, 1);
	}
}

/**
 * collect groups
 */
OSCBSA.Groups = function(owner) {
	this.owner = owner; // Object containing groups
};
OSCBSA.Groups.prototype = new Array();
OSCBSA.Groups.prototype.addGroup = function(group) {
	group.addItem(this.owner);
	if(this.indexOf(group) < 0) {
		this.push(group);
	}
};
OSCBSA.Groups.prototype.removeGroup = function(group) {
	group.removeItem(this.owner);
	var index = this.indexOf(group);
	if(index >= 0) {
		this.splice(index, 1);
	}
};

/**
 * stores information of individual players
 */
OSCBSA.Player = function(number) {
	this.number = number; // identifies player in contest
	this.nbo = '';
	this.nboNumber = '';
	this.name = '';
	this.groups = new OSCBSA.Groups(this);
};

/**
 * identifies exactly two individual players
 */
OSCBSA.Pair = function() {
	
};

/**
 * identifies the unit on which the final ranking is based
 */
OSCBSA.Particiant = function() {
	
};

/**
 * stores information of a result on a board by two opposing pairs
 */
OSCBSA.Line = function() {
	
};

/**
 * groups all results on a board
 */
OSCBSA.Board = function() {
	
};

/**
 * groups results and participants allowing for a session-based ranking
 */
OSCBSA.Session = function() {
	
};

/**
 * groups sessions allowing for a single-session or multi-session based ranking
 */
OSCBSA.Contest = function() {
	
};
