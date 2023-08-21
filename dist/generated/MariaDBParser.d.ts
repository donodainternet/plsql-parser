import { ATN } from "antlr4ts/atn/ATN";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { MariaDBParserListener } from "./MariaDBParserListener";
export declare class MariaDBParser extends Parser {
    static readonly SPACE = 1;
    static readonly SPEC_MYSQL_COMMENT = 2;
    static readonly COMMENT_INPUT = 3;
    static readonly LINE_COMMENT = 4;
    static readonly ADD = 5;
    static readonly ALL = 6;
    static readonly ALTER = 7;
    static readonly ALWAYS = 8;
    static readonly ANALYZE = 9;
    static readonly AND = 10;
    static readonly ARRAY = 11;
    static readonly AS = 12;
    static readonly ASC = 13;
    static readonly ATTRIBUTE = 14;
    static readonly BEFORE = 15;
    static readonly BETWEEN = 16;
    static readonly BODY = 17;
    static readonly BOTH = 18;
    static readonly BUCKETS = 19;
    static readonly BY = 20;
    static readonly CALL = 21;
    static readonly CASCADE = 22;
    static readonly CASE = 23;
    static readonly CAST = 24;
    static readonly CHANGE = 25;
    static readonly CHARACTER = 26;
    static readonly CHECK = 27;
    static readonly COLLATE = 28;
    static readonly COLUMN = 29;
    static readonly CONDITION = 30;
    static readonly CONSTRAINT = 31;
    static readonly CONTINUE = 32;
    static readonly CONVERT = 33;
    static readonly CREATE = 34;
    static readonly CROSS = 35;
    static readonly CURRENT = 36;
    static readonly CURRENT_ROLE = 37;
    static readonly CURRENT_USER = 38;
    static readonly CURSOR = 39;
    static readonly DATABASE = 40;
    static readonly DATABASES = 41;
    static readonly DECLARE = 42;
    static readonly DEFAULT = 43;
    static readonly DELAYED = 44;
    static readonly DELETE = 45;
    static readonly DESC = 46;
    static readonly DESCRIBE = 47;
    static readonly DETERMINISTIC = 48;
    static readonly DIAGNOSTICS = 49;
    static readonly DISTINCT = 50;
    static readonly DISTINCTROW = 51;
    static readonly DROP = 52;
    static readonly EACH = 53;
    static readonly ELSE = 54;
    static readonly ELSEIF = 55;
    static readonly EMPTY = 56;
    static readonly ENCLOSED = 57;
    static readonly ESCAPED = 58;
    static readonly EXCEPT = 59;
    static readonly EXISTS = 60;
    static readonly EXIT = 61;
    static readonly EXPLAIN = 62;
    static readonly FALSE = 63;
    static readonly FETCH = 64;
    static readonly FOR = 65;
    static readonly FORCE = 66;
    static readonly FOREIGN = 67;
    static readonly FROM = 68;
    static readonly FULLTEXT = 69;
    static readonly GENERATED = 70;
    static readonly GET = 71;
    static readonly GRANT = 72;
    static readonly GROUP = 73;
    static readonly HAVING = 74;
    static readonly HIGH_PRIORITY = 75;
    static readonly HISTOGRAM = 76;
    static readonly IF = 77;
    static readonly IGNORE = 78;
    static readonly IGNORED = 79;
    static readonly IN = 80;
    static readonly INDEX = 81;
    static readonly INFILE = 82;
    static readonly INNER = 83;
    static readonly INOUT = 84;
    static readonly INSERT = 85;
    static readonly INTERVAL = 86;
    static readonly INTO = 87;
    static readonly IS = 88;
    static readonly ITERATE = 89;
    static readonly JOIN = 90;
    static readonly KEY = 91;
    static readonly KEYS = 92;
    static readonly KILL = 93;
    static readonly LATERAL = 94;
    static readonly LEADING = 95;
    static readonly LEAVE = 96;
    static readonly LEFT = 97;
    static readonly LIKE = 98;
    static readonly LIMIT = 99;
    static readonly LINEAR = 100;
    static readonly LINES = 101;
    static readonly LOAD = 102;
    static readonly LOCK = 103;
    static readonly LOCKED = 104;
    static readonly LOOP = 105;
    static readonly LOW_PRIORITY = 106;
    static readonly MASTER_BIND = 107;
    static readonly MASTER_SSL_VERIFY_SERVER_CERT = 108;
    static readonly MATCH = 109;
    static readonly MAXVALUE = 110;
    static readonly MINVALUE = 111;
    static readonly MODIFIES = 112;
    static readonly NATURAL = 113;
    static readonly NOT = 114;
    static readonly NO_WRITE_TO_BINLOG = 115;
    static readonly NULL_LITERAL = 116;
    static readonly NUMBER = 117;
    static readonly ON = 118;
    static readonly OPTIMIZE = 119;
    static readonly OPTION = 120;
    static readonly OPTIONAL = 121;
    static readonly OPTIONALLY = 122;
    static readonly OR = 123;
    static readonly ORDER = 124;
    static readonly OUT = 125;
    static readonly OUTER = 126;
    static readonly OUTFILE = 127;
    static readonly OVER = 128;
    static readonly PARTITION = 129;
    static readonly PRIMARY = 130;
    static readonly PACKAGE = 131;
    static readonly PROCEDURE = 132;
    static readonly PURGE = 133;
    static readonly RANGE = 134;
    static readonly READ = 135;
    static readonly READS = 136;
    static readonly REFERENCES = 137;
    static readonly REGEXP = 138;
    static readonly RELEASE = 139;
    static readonly RENAME = 140;
    static readonly REPEAT = 141;
    static readonly REPLACE = 142;
    static readonly REQUIRE = 143;
    static readonly RESIGNAL = 144;
    static readonly RESTRICT = 145;
    static readonly RETAIN = 146;
    static readonly RETURN = 147;
    static readonly REVOKE = 148;
    static readonly RIGHT = 149;
    static readonly RLIKE = 150;
    static readonly SCHEMA = 151;
    static readonly SCHEMAS = 152;
    static readonly SELECT = 153;
    static readonly SET = 154;
    static readonly SEPARATOR = 155;
    static readonly SHOW = 156;
    static readonly SIGNAL = 157;
    static readonly SKIP_ = 158;
    static readonly SPATIAL = 159;
    static readonly SQL = 160;
    static readonly SQLEXCEPTION = 161;
    static readonly SQLSTATE = 162;
    static readonly SQLWARNING = 163;
    static readonly SQL_BIG_RESULT = 164;
    static readonly SQL_CALC_FOUND_ROWS = 165;
    static readonly SQL_SMALL_RESULT = 166;
    static readonly SSL = 167;
    static readonly STACKED = 168;
    static readonly STARTING = 169;
    static readonly STATEMENT = 170;
    static readonly STRAIGHT_JOIN = 171;
    static readonly TABLE = 172;
    static readonly TERMINATED = 173;
    static readonly THEN = 174;
    static readonly TO = 175;
    static readonly TRAILING = 176;
    static readonly TRIGGER = 177;
    static readonly TRUE = 178;
    static readonly UNDO = 179;
    static readonly UNION = 180;
    static readonly UNIQUE = 181;
    static readonly UNLOCK = 182;
    static readonly UNSIGNED = 183;
    static readonly UPDATE = 184;
    static readonly USAGE = 185;
    static readonly USE = 186;
    static readonly USING = 187;
    static readonly VALUES = 188;
    static readonly WHEN = 189;
    static readonly WHERE = 190;
    static readonly WHILE = 191;
    static readonly WITH = 192;
    static readonly WRITE = 193;
    static readonly XOR = 194;
    static readonly ZEROFILL = 195;
    static readonly TINYINT = 196;
    static readonly SMALLINT = 197;
    static readonly MEDIUMINT = 198;
    static readonly MIDDLEINT = 199;
    static readonly INT = 200;
    static readonly INT1 = 201;
    static readonly INT2 = 202;
    static readonly INT3 = 203;
    static readonly INT4 = 204;
    static readonly INT8 = 205;
    static readonly INTEGER = 206;
    static readonly BIGINT = 207;
    static readonly REAL = 208;
    static readonly DOUBLE = 209;
    static readonly PRECISION = 210;
    static readonly FLOAT = 211;
    static readonly FLOAT4 = 212;
    static readonly FLOAT8 = 213;
    static readonly DECIMAL = 214;
    static readonly DEC = 215;
    static readonly NUMERIC = 216;
    static readonly DATE = 217;
    static readonly TIME = 218;
    static readonly TIMESTAMP = 219;
    static readonly DATETIME = 220;
    static readonly YEAR = 221;
    static readonly CHAR = 222;
    static readonly VARCHAR = 223;
    static readonly NVARCHAR = 224;
    static readonly NATIONAL = 225;
    static readonly BINARY = 226;
    static readonly VARBINARY = 227;
    static readonly TINYBLOB = 228;
    static readonly BLOB = 229;
    static readonly MEDIUMBLOB = 230;
    static readonly LONG = 231;
    static readonly LONGBLOB = 232;
    static readonly TINYTEXT = 233;
    static readonly TEXT = 234;
    static readonly MEDIUMTEXT = 235;
    static readonly LONGTEXT = 236;
    static readonly ENUM = 237;
    static readonly VARYING = 238;
    static readonly SERIAL = 239;
    static readonly YEAR_MONTH = 240;
    static readonly DAY_HOUR = 241;
    static readonly DAY_MINUTE = 242;
    static readonly DAY_SECOND = 243;
    static readonly HOUR_MINUTE = 244;
    static readonly HOUR_SECOND = 245;
    static readonly MINUTE_SECOND = 246;
    static readonly SECOND_MICROSECOND = 247;
    static readonly MINUTE_MICROSECOND = 248;
    static readonly HOUR_MICROSECOND = 249;
    static readonly DAY_MICROSECOND = 250;
    static readonly JSON_ARRAY = 251;
    static readonly JSON_ARRAYAGG = 252;
    static readonly JSON_ARRAY_APPEND = 253;
    static readonly JSON_ARRAY_INSERT = 254;
    static readonly JSON_CONTAINS = 255;
    static readonly JSON_CONTAINS_PATH = 256;
    static readonly JSON_DEPTH = 257;
    static readonly JSON_EXTRACT = 258;
    static readonly JSON_INSERT = 259;
    static readonly JSON_KEYS = 260;
    static readonly JSON_LENGTH = 261;
    static readonly JSON_MERGE = 262;
    static readonly JSON_MERGE_PATCH = 263;
    static readonly JSON_MERGE_PRESERVE = 264;
    static readonly JSON_OBJECT = 265;
    static readonly JSON_OBJECTAGG = 266;
    static readonly JSON_OVERLAPS = 267;
    static readonly JSON_PRETTY = 268;
    static readonly JSON_QUOTE = 269;
    static readonly JSON_REMOVE = 270;
    static readonly JSON_REPLACE = 271;
    static readonly JSON_SCHEMA_VALID = 272;
    static readonly JSON_SCHEMA_VALIDATION_REPORT = 273;
    static readonly JSON_SEARCH = 274;
    static readonly JSON_SET = 275;
    static readonly JSON_STORAGE_FREE = 276;
    static readonly JSON_STORAGE_SIZE = 277;
    static readonly JSON_TABLE = 278;
    static readonly JSON_TYPE = 279;
    static readonly JSON_UNQUOTE = 280;
    static readonly JSON_VALID = 281;
    static readonly JSON_VALUE = 282;
    static readonly NESTED = 283;
    static readonly ORDINALITY = 284;
    static readonly PATH = 285;
    static readonly AVG = 286;
    static readonly BIT_AND = 287;
    static readonly BIT_OR = 288;
    static readonly BIT_XOR = 289;
    static readonly COUNT = 290;
    static readonly CUME_DIST = 291;
    static readonly DENSE_RANK = 292;
    static readonly FIRST_VALUE = 293;
    static readonly GROUP_CONCAT = 294;
    static readonly LAG = 295;
    static readonly LAST_VALUE = 296;
    static readonly LEAD = 297;
    static readonly MAX = 298;
    static readonly MIN = 299;
    static readonly NTILE = 300;
    static readonly NTH_VALUE = 301;
    static readonly PERCENT_RANK = 302;
    static readonly RANK = 303;
    static readonly ROW_NUMBER = 304;
    static readonly STD = 305;
    static readonly STDDEV = 306;
    static readonly STDDEV_POP = 307;
    static readonly STDDEV_SAMP = 308;
    static readonly SUM = 309;
    static readonly VAR_POP = 310;
    static readonly VAR_SAMP = 311;
    static readonly VARIANCE = 312;
    static readonly CURRENT_DATE = 313;
    static readonly CURRENT_TIME = 314;
    static readonly CURRENT_TIMESTAMP = 315;
    static readonly LOCALTIME = 316;
    static readonly CURDATE = 317;
    static readonly CURTIME = 318;
    static readonly DATE_ADD = 319;
    static readonly DATE_SUB = 320;
    static readonly EXTRACT = 321;
    static readonly LOCALTIMESTAMP = 322;
    static readonly NOW = 323;
    static readonly POSITION = 324;
    static readonly SUBSTR = 325;
    static readonly SUBSTRING = 326;
    static readonly SYSDATE = 327;
    static readonly TRIM = 328;
    static readonly UTC_DATE = 329;
    static readonly UTC_TIME = 330;
    static readonly UTC_TIMESTAMP = 331;
    static readonly ACCOUNT = 332;
    static readonly ACTION = 333;
    static readonly AFTER = 334;
    static readonly AGGREGATE = 335;
    static readonly ALGORITHM = 336;
    static readonly ANY = 337;
    static readonly AT = 338;
    static readonly AUTHORS = 339;
    static readonly AUTOCOMMIT = 340;
    static readonly AUTOEXTEND_SIZE = 341;
    static readonly AUTO_INCREMENT = 342;
    static readonly AVG_ROW_LENGTH = 343;
    static readonly BEGIN = 344;
    static readonly BINLOG = 345;
    static readonly BIT = 346;
    static readonly BLOCK = 347;
    static readonly BOOL = 348;
    static readonly BOOLEAN = 349;
    static readonly BTREE = 350;
    static readonly CACHE = 351;
    static readonly CASCADED = 352;
    static readonly CHAIN = 353;
    static readonly CHANGED = 354;
    static readonly CHANNEL = 355;
    static readonly CHECKSUM = 356;
    static readonly PAGE_CHECKSUM = 357;
    static readonly CIPHER = 358;
    static readonly CLASS_ORIGIN = 359;
    static readonly CLIENT = 360;
    static readonly CLOSE = 361;
    static readonly CLUSTERING = 362;
    static readonly COALESCE = 363;
    static readonly CODE = 364;
    static readonly COLUMNS = 365;
    static readonly COLUMN_FORMAT = 366;
    static readonly COLUMN_NAME = 367;
    static readonly COMMENT = 368;
    static readonly COMMIT = 369;
    static readonly COMPACT = 370;
    static readonly COMPLETION = 371;
    static readonly COMPRESSED = 372;
    static readonly COMPRESSION = 373;
    static readonly CONCURRENT = 374;
    static readonly CONNECT = 375;
    static readonly CONNECTION = 376;
    static readonly CONSISTENT = 377;
    static readonly CONSTRAINT_CATALOG = 378;
    static readonly CONSTRAINT_SCHEMA = 379;
    static readonly CONSTRAINT_NAME = 380;
    static readonly CONTAINS = 381;
    static readonly CONTEXT = 382;
    static readonly CONTRIBUTORS = 383;
    static readonly COPY = 384;
    static readonly CPU = 385;
    static readonly CYCLE = 386;
    static readonly CURSOR_NAME = 387;
    static readonly DATA = 388;
    static readonly DATAFILE = 389;
    static readonly DEALLOCATE = 390;
    static readonly DEFAULT_AUTH = 391;
    static readonly DEFINER = 392;
    static readonly DELAY_KEY_WRITE = 393;
    static readonly DES_KEY_FILE = 394;
    static readonly DIRECTORY = 395;
    static readonly DISABLE = 396;
    static readonly DISCARD = 397;
    static readonly DISK = 398;
    static readonly DO = 399;
    static readonly DUMPFILE = 400;
    static readonly DUPLICATE = 401;
    static readonly DYNAMIC = 402;
    static readonly ENABLE = 403;
    static readonly ENCRYPTED = 404;
    static readonly ENCRYPTION = 405;
    static readonly ENCRYPTION_KEY_ID = 406;
    static readonly END = 407;
    static readonly ENDS = 408;
    static readonly ENGINE = 409;
    static readonly ENGINES = 410;
    static readonly ERROR = 411;
    static readonly ERRORS = 412;
    static readonly ESCAPE = 413;
    static readonly EVEN = 414;
    static readonly EVENT = 415;
    static readonly EVENTS = 416;
    static readonly EVERY = 417;
    static readonly EXCHANGE = 418;
    static readonly EXCLUSIVE = 419;
    static readonly EXPIRE = 420;
    static readonly EXPORT = 421;
    static readonly EXTENDED = 422;
    static readonly EXTENT_SIZE = 423;
    static readonly FAILED_LOGIN_ATTEMPTS = 424;
    static readonly FAST = 425;
    static readonly FAULTS = 426;
    static readonly FIELDS = 427;
    static readonly FILE_BLOCK_SIZE = 428;
    static readonly FILTER = 429;
    static readonly FIRST = 430;
    static readonly FIXED = 431;
    static readonly FLUSH = 432;
    static readonly FOLLOWING = 433;
    static readonly FOLLOWS = 434;
    static readonly FOUND = 435;
    static readonly FULL = 436;
    static readonly FUNCTION = 437;
    static readonly GENERAL = 438;
    static readonly GLOBAL = 439;
    static readonly GRANTS = 440;
    static readonly GROUP_REPLICATION = 441;
    static readonly HANDLER = 442;
    static readonly HASH = 443;
    static readonly HELP = 444;
    static readonly HISTORY = 445;
    static readonly HOST = 446;
    static readonly HOSTS = 447;
    static readonly IDENTIFIED = 448;
    static readonly IGNORE_SERVER_IDS = 449;
    static readonly IMPORT = 450;
    static readonly INCREMENT = 451;
    static readonly INDEXES = 452;
    static readonly INITIAL_SIZE = 453;
    static readonly INPLACE = 454;
    static readonly INSERT_METHOD = 455;
    static readonly INSTALL = 456;
    static readonly INSTANCE = 457;
    static readonly INSTANT = 458;
    static readonly INVISIBLE = 459;
    static readonly INVOKER = 460;
    static readonly IO = 461;
    static readonly IO_THREAD = 462;
    static readonly IPC = 463;
    static readonly ISOLATION = 464;
    static readonly ISSUER = 465;
    static readonly JSON = 466;
    static readonly KEY_BLOCK_SIZE = 467;
    static readonly LANGUAGE = 468;
    static readonly LAST = 469;
    static readonly LEAVES = 470;
    static readonly LESS = 471;
    static readonly LEVEL = 472;
    static readonly LIST = 473;
    static readonly LOCAL = 474;
    static readonly LOCALES = 475;
    static readonly LOGFILE = 476;
    static readonly LOGS = 477;
    static readonly MASTER = 478;
    static readonly MASTER_AUTO_POSITION = 479;
    static readonly MASTER_CONNECT_RETRY = 480;
    static readonly MASTER_DELAY = 481;
    static readonly MASTER_HEARTBEAT_PERIOD = 482;
    static readonly MASTER_HOST = 483;
    static readonly MASTER_LOG_FILE = 484;
    static readonly MASTER_LOG_POS = 485;
    static readonly MASTER_PASSWORD = 486;
    static readonly MASTER_PORT = 487;
    static readonly MASTER_RETRY_COUNT = 488;
    static readonly MASTER_SSL = 489;
    static readonly MASTER_SSL_CA = 490;
    static readonly MASTER_SSL_CAPATH = 491;
    static readonly MASTER_SSL_CERT = 492;
    static readonly MASTER_SSL_CIPHER = 493;
    static readonly MASTER_SSL_CRL = 494;
    static readonly MASTER_SSL_CRLPATH = 495;
    static readonly MASTER_SSL_KEY = 496;
    static readonly MASTER_TLS_VERSION = 497;
    static readonly MASTER_USER = 498;
    static readonly MAX_CONNECTIONS_PER_HOUR = 499;
    static readonly MAX_QUERIES_PER_HOUR = 500;
    static readonly MAX_ROWS = 501;
    static readonly MAX_SIZE = 502;
    static readonly MAX_UPDATES_PER_HOUR = 503;
    static readonly MAX_USER_CONNECTIONS = 504;
    static readonly MEDIUM = 505;
    static readonly MEMBER = 506;
    static readonly MERGE = 507;
    static readonly MESSAGE_TEXT = 508;
    static readonly MID = 509;
    static readonly MIGRATE = 510;
    static readonly MIN_ROWS = 511;
    static readonly MODE = 512;
    static readonly MODIFY = 513;
    static readonly MUTEX = 514;
    static readonly MYSQL = 515;
    static readonly MYSQL_ERRNO = 516;
    static readonly NAME = 517;
    static readonly NAMES = 518;
    static readonly NCHAR = 519;
    static readonly NEVER = 520;
    static readonly NEXT = 521;
    static readonly NO = 522;
    static readonly NOCACHE = 523;
    static readonly NOCOPY = 524;
    static readonly NOCYCLE = 525;
    static readonly NOMAXVALUE = 526;
    static readonly NOMINVALUE = 527;
    static readonly NOWAIT = 528;
    static readonly NODEGROUP = 529;
    static readonly NONE = 530;
    static readonly ODBC = 531;
    static readonly OFFLINE = 532;
    static readonly OFFSET = 533;
    static readonly OF = 534;
    static readonly OJ = 535;
    static readonly OLD_PASSWORD = 536;
    static readonly ONE = 537;
    static readonly ONLINE = 538;
    static readonly ONLY = 539;
    static readonly OPEN = 540;
    static readonly OPTIMIZER_COSTS = 541;
    static readonly OPTIONS = 542;
    static readonly OWNER = 543;
    static readonly PACK_KEYS = 544;
    static readonly PAGE = 545;
    static readonly PAGE_COMPRESSED = 546;
    static readonly PAGE_COMPRESSION_LEVEL = 547;
    static readonly PARSER = 548;
    static readonly PARTIAL = 549;
    static readonly PARTITIONING = 550;
    static readonly PARTITIONS = 551;
    static readonly PASSWORD = 552;
    static readonly PASSWORD_LOCK_TIME = 553;
    static readonly PHASE = 554;
    static readonly PLUGIN = 555;
    static readonly PLUGIN_DIR = 556;
    static readonly PLUGINS = 557;
    static readonly PORT = 558;
    static readonly PRECEDES = 559;
    static readonly PRECEDING = 560;
    static readonly PREPARE = 561;
    static readonly PRESERVE = 562;
    static readonly PREV = 563;
    static readonly PROCESSLIST = 564;
    static readonly PROFILE = 565;
    static readonly PROFILES = 566;
    static readonly PROXY = 567;
    static readonly QUERY = 568;
    static readonly QUERY_RESPONSE_TIME = 569;
    static readonly QUICK = 570;
    static readonly REBUILD = 571;
    static readonly RECOVER = 572;
    static readonly RECURSIVE = 573;
    static readonly REDO_BUFFER_SIZE = 574;
    static readonly REDUNDANT = 575;
    static readonly RELAY = 576;
    static readonly RELAY_LOG_FILE = 577;
    static readonly RELAY_LOG_POS = 578;
    static readonly RELAYLOG = 579;
    static readonly REMOVE = 580;
    static readonly REORGANIZE = 581;
    static readonly REPAIR = 582;
    static readonly REPLICATE_DO_DB = 583;
    static readonly REPLICATE_DO_TABLE = 584;
    static readonly REPLICATE_IGNORE_DB = 585;
    static readonly REPLICATE_IGNORE_TABLE = 586;
    static readonly REPLICATE_REWRITE_DB = 587;
    static readonly REPLICATE_WILD_DO_TABLE = 588;
    static readonly REPLICATE_WILD_IGNORE_TABLE = 589;
    static readonly REPLICATION = 590;
    static readonly RESET = 591;
    static readonly RESTART = 592;
    static readonly RESUME = 593;
    static readonly RETURNED_SQLSTATE = 594;
    static readonly RETURNING = 595;
    static readonly RETURNS = 596;
    static readonly REUSE = 597;
    static readonly ROLE = 598;
    static readonly ROLLBACK = 599;
    static readonly ROLLUP = 600;
    static readonly ROTATE = 601;
    static readonly ROW = 602;
    static readonly ROWS = 603;
    static readonly ROW_FORMAT = 604;
    static readonly RTREE = 605;
    static readonly SAVEPOINT = 606;
    static readonly SCHEDULE = 607;
    static readonly SECURITY = 608;
    static readonly SEQUENCE = 609;
    static readonly SERVER = 610;
    static readonly SESSION = 611;
    static readonly SHARE = 612;
    static readonly SHARED = 613;
    static readonly SIGNED = 614;
    static readonly SIMPLE = 615;
    static readonly SLAVE = 616;
    static readonly SLAVES = 617;
    static readonly SLOW = 618;
    static readonly SNAPSHOT = 619;
    static readonly SOCKET = 620;
    static readonly SOME = 621;
    static readonly SONAME = 622;
    static readonly SOUNDS = 623;
    static readonly SOURCE = 624;
    static readonly SQL_AFTER_GTIDS = 625;
    static readonly SQL_AFTER_MTS_GAPS = 626;
    static readonly SQL_BEFORE_GTIDS = 627;
    static readonly SQL_BUFFER_RESULT = 628;
    static readonly SQL_CACHE = 629;
    static readonly SQL_NO_CACHE = 630;
    static readonly SQL_THREAD = 631;
    static readonly START = 632;
    static readonly STARTS = 633;
    static readonly STATS_AUTO_RECALC = 634;
    static readonly STATS_PERSISTENT = 635;
    static readonly STATS_SAMPLE_PAGES = 636;
    static readonly STATUS = 637;
    static readonly STOP = 638;
    static readonly STORAGE = 639;
    static readonly STORED = 640;
    static readonly STRING = 641;
    static readonly SUBCLASS_ORIGIN = 642;
    static readonly SUBJECT = 643;
    static readonly SUBPARTITION = 644;
    static readonly SUBPARTITIONS = 645;
    static readonly SUSPEND = 646;
    static readonly SWAPS = 647;
    static readonly SWITCHES = 648;
    static readonly TABLE_NAME = 649;
    static readonly TABLESPACE = 650;
    static readonly TABLE_TYPE = 651;
    static readonly TEMPORARY = 652;
    static readonly TEMPTABLE = 653;
    static readonly THAN = 654;
    static readonly TRADITIONAL = 655;
    static readonly TRANSACTION = 656;
    static readonly TRANSACTIONAL = 657;
    static readonly TRIGGERS = 658;
    static readonly TRUNCATE = 659;
    static readonly TYPES = 660;
    static readonly UNBOUNDED = 661;
    static readonly UNDEFINED = 662;
    static readonly UNDOFILE = 663;
    static readonly UNDO_BUFFER_SIZE = 664;
    static readonly UNINSTALL = 665;
    static readonly UNKNOWN = 666;
    static readonly UNTIL = 667;
    static readonly UPGRADE = 668;
    static readonly USER = 669;
    static readonly USE_FRM = 670;
    static readonly USER_RESOURCES = 671;
    static readonly VALIDATION = 672;
    static readonly VALUE = 673;
    static readonly VARIABLES = 674;
    static readonly VIEW = 675;
    static readonly VIRTUAL = 676;
    static readonly VISIBLE = 677;
    static readonly WAIT = 678;
    static readonly WARNINGS = 679;
    static readonly WINDOW = 680;
    static readonly WITHOUT = 681;
    static readonly WORK = 682;
    static readonly WRAPPER = 683;
    static readonly WSREP_MEMBERSHIP = 684;
    static readonly WSREP_STATUS = 685;
    static readonly X509 = 686;
    static readonly XA = 687;
    static readonly XML = 688;
    static readonly YES = 689;
    static readonly EUR = 690;
    static readonly USA = 691;
    static readonly JIS = 692;
    static readonly ISO = 693;
    static readonly INTERNAL = 694;
    static readonly QUARTER = 695;
    static readonly MONTH = 696;
    static readonly DAY = 697;
    static readonly HOUR = 698;
    static readonly MINUTE = 699;
    static readonly WEEK = 700;
    static readonly SECOND = 701;
    static readonly MICROSECOND = 702;
    static readonly USER_STATISTICS = 703;
    static readonly CLIENT_STATISTICS = 704;
    static readonly INDEX_STATISTICS = 705;
    static readonly TABLE_STATISTICS = 706;
    static readonly ADMIN = 707;
    static readonly APPLICATION_PASSWORD_ADMIN = 708;
    static readonly AUDIT_ADMIN = 709;
    static readonly BACKUP_ADMIN = 710;
    static readonly BINLOG_ADMIN = 711;
    static readonly BINLOG_ENCRYPTION_ADMIN = 712;
    static readonly CLONE_ADMIN = 713;
    static readonly CONNECTION_ADMIN = 714;
    static readonly ENCRYPTION_KEY_ADMIN = 715;
    static readonly EXECUTE = 716;
    static readonly FILE = 717;
    static readonly FIREWALL_ADMIN = 718;
    static readonly FIREWALL_USER = 719;
    static readonly FLUSH_OPTIMIZER_COSTS = 720;
    static readonly FLUSH_STATUS = 721;
    static readonly FLUSH_TABLES = 722;
    static readonly FLUSH_USER_RESOURCES = 723;
    static readonly GROUP_REPLICATION_ADMIN = 724;
    static readonly INNODB_REDO_LOG_ARCHIVE = 725;
    static readonly INNODB_REDO_LOG_ENABLE = 726;
    static readonly INVOKE = 727;
    static readonly LAMBDA = 728;
    static readonly NDB_STORED_USER = 729;
    static readonly PASSWORDLESS_USER_ADMIN = 730;
    static readonly PERSIST_RO_VARIABLES_ADMIN = 731;
    static readonly PRIVILEGES = 732;
    static readonly PROCESS = 733;
    static readonly RELOAD = 734;
    static readonly REPLICATION_APPLIER = 735;
    static readonly REPLICATION_SLAVE_ADMIN = 736;
    static readonly RESOURCE_GROUP_ADMIN = 737;
    static readonly RESOURCE_GROUP_USER = 738;
    static readonly ROLE_ADMIN = 739;
    static readonly ROUTINE = 740;
    static readonly S3 = 741;
    static readonly SERVICE_CONNECTION_ADMIN = 742;
    static readonly SESSION_VARIABLES_ADMIN = 743;
    static readonly SET_USER_ID = 744;
    static readonly SHOW_ROUTINE = 745;
    static readonly SHUTDOWN = 746;
    static readonly SUPER = 747;
    static readonly SYSTEM_VARIABLES_ADMIN = 748;
    static readonly TABLES = 749;
    static readonly TABLE_ENCRYPTION_ADMIN = 750;
    static readonly VERSION_TOKEN_ADMIN = 751;
    static readonly XA_RECOVER_ADMIN = 752;
    static readonly ARMSCII8 = 753;
    static readonly ASCII = 754;
    static readonly BIG5 = 755;
    static readonly CP1250 = 756;
    static readonly CP1251 = 757;
    static readonly CP1256 = 758;
    static readonly CP1257 = 759;
    static readonly CP850 = 760;
    static readonly CP852 = 761;
    static readonly CP866 = 762;
    static readonly CP932 = 763;
    static readonly DEC8 = 764;
    static readonly EUCJPMS = 765;
    static readonly EUCKR = 766;
    static readonly GB18030 = 767;
    static readonly GB2312 = 768;
    static readonly GBK = 769;
    static readonly GEOSTD8 = 770;
    static readonly GREEK = 771;
    static readonly HEBREW = 772;
    static readonly HP8 = 773;
    static readonly KEYBCS2 = 774;
    static readonly KOI8R = 775;
    static readonly KOI8U = 776;
    static readonly LATIN1 = 777;
    static readonly LATIN2 = 778;
    static readonly LATIN5 = 779;
    static readonly LATIN7 = 780;
    static readonly MACCE = 781;
    static readonly MACROMAN = 782;
    static readonly SJIS = 783;
    static readonly SWE7 = 784;
    static readonly TIS620 = 785;
    static readonly UCS2 = 786;
    static readonly UJIS = 787;
    static readonly UTF16 = 788;
    static readonly UTF16LE = 789;
    static readonly UTF32 = 790;
    static readonly UTF8 = 791;
    static readonly UTF8MB3 = 792;
    static readonly UTF8MB4 = 793;
    static readonly ARCHIVE = 794;
    static readonly BLACKHOLE = 795;
    static readonly CSV = 796;
    static readonly FEDERATED = 797;
    static readonly INNODB = 798;
    static readonly MEMORY = 799;
    static readonly MRG_MYISAM = 800;
    static readonly MYISAM = 801;
    static readonly NDB = 802;
    static readonly NDBCLUSTER = 803;
    static readonly PERFORMANCE_SCHEMA = 804;
    static readonly TOKUDB = 805;
    static readonly REPEATABLE = 806;
    static readonly COMMITTED = 807;
    static readonly UNCOMMITTED = 808;
    static readonly SERIALIZABLE = 809;
    static readonly GEOMETRYCOLLECTION = 810;
    static readonly GEOMCOLLECTION = 811;
    static readonly GEOMETRY = 812;
    static readonly LINESTRING = 813;
    static readonly MULTILINESTRING = 814;
    static readonly MULTIPOINT = 815;
    static readonly MULTIPOLYGON = 816;
    static readonly POINT = 817;
    static readonly POLYGON = 818;
    static readonly ABS = 819;
    static readonly ACOS = 820;
    static readonly ADDDATE = 821;
    static readonly ADDTIME = 822;
    static readonly AES_DECRYPT = 823;
    static readonly AES_ENCRYPT = 824;
    static readonly AREA = 825;
    static readonly ASBINARY = 826;
    static readonly ASIN = 827;
    static readonly ASTEXT = 828;
    static readonly ASWKB = 829;
    static readonly ASWKT = 830;
    static readonly ASYMMETRIC_DECRYPT = 831;
    static readonly ASYMMETRIC_DERIVE = 832;
    static readonly ASYMMETRIC_ENCRYPT = 833;
    static readonly ASYMMETRIC_SIGN = 834;
    static readonly ASYMMETRIC_VERIFY = 835;
    static readonly ATAN = 836;
    static readonly ATAN2 = 837;
    static readonly BENCHMARK = 838;
    static readonly BIN = 839;
    static readonly BIT_COUNT = 840;
    static readonly BIT_LENGTH = 841;
    static readonly BUFFER = 842;
    static readonly CATALOG_NAME = 843;
    static readonly CEIL = 844;
    static readonly CEILING = 845;
    static readonly CENTROID = 846;
    static readonly CHARACTER_LENGTH = 847;
    static readonly CHARSET = 848;
    static readonly CHAR_LENGTH = 849;
    static readonly COERCIBILITY = 850;
    static readonly COLLATION = 851;
    static readonly COMPRESS = 852;
    static readonly CONCAT = 853;
    static readonly CONCAT_WS = 854;
    static readonly CONNECTION_ID = 855;
    static readonly CONV = 856;
    static readonly CONVERT_TZ = 857;
    static readonly COS = 858;
    static readonly COT = 859;
    static readonly CRC32 = 860;
    static readonly CREATE_ASYMMETRIC_PRIV_KEY = 861;
    static readonly CREATE_ASYMMETRIC_PUB_KEY = 862;
    static readonly CREATE_DH_PARAMETERS = 863;
    static readonly CREATE_DIGEST = 864;
    static readonly CROSSES = 865;
    static readonly DATEDIFF = 866;
    static readonly DATE_FORMAT = 867;
    static readonly DAYNAME = 868;
    static readonly DAYOFMONTH = 869;
    static readonly DAYOFWEEK = 870;
    static readonly DAYOFYEAR = 871;
    static readonly DECODE = 872;
    static readonly DEGREES = 873;
    static readonly DES_DECRYPT = 874;
    static readonly DES_ENCRYPT = 875;
    static readonly DIMENSION = 876;
    static readonly DISJOINT = 877;
    static readonly ELT = 878;
    static readonly ENCODE = 879;
    static readonly ENCRYPT = 880;
    static readonly ENDPOINT = 881;
    static readonly ENGINE_ATTRIBUTE = 882;
    static readonly ENVELOPE = 883;
    static readonly EQUALS = 884;
    static readonly EXP = 885;
    static readonly EXPORT_SET = 886;
    static readonly EXTERIORRING = 887;
    static readonly EXTRACTVALUE = 888;
    static readonly FIELD = 889;
    static readonly FIND_IN_SET = 890;
    static readonly FLOOR = 891;
    static readonly FORMAT = 892;
    static readonly FOUND_ROWS = 893;
    static readonly FROM_BASE64 = 894;
    static readonly FROM_DAYS = 895;
    static readonly FROM_UNIXTIME = 896;
    static readonly GEOMCOLLFROMTEXT = 897;
    static readonly GEOMCOLLFROMWKB = 898;
    static readonly GEOMETRYCOLLECTIONFROMTEXT = 899;
    static readonly GEOMETRYCOLLECTIONFROMWKB = 900;
    static readonly GEOMETRYFROMTEXT = 901;
    static readonly GEOMETRYFROMWKB = 902;
    static readonly GEOMETRYN = 903;
    static readonly GEOMETRYTYPE = 904;
    static readonly GEOMFROMTEXT = 905;
    static readonly GEOMFROMWKB = 906;
    static readonly GET_FORMAT = 907;
    static readonly GET_LOCK = 908;
    static readonly GLENGTH = 909;
    static readonly GREATEST = 910;
    static readonly GTID_SUBSET = 911;
    static readonly GTID_SUBTRACT = 912;
    static readonly HEX = 913;
    static readonly IFNULL = 914;
    static readonly INET6_ATON = 915;
    static readonly INET6_NTOA = 916;
    static readonly INET_ATON = 917;
    static readonly INET_NTOA = 918;
    static readonly INSTR = 919;
    static readonly INTERIORRINGN = 920;
    static readonly INTERSECTS = 921;
    static readonly ISCLOSED = 922;
    static readonly ISEMPTY = 923;
    static readonly ISNULL = 924;
    static readonly ISSIMPLE = 925;
    static readonly IS_FREE_LOCK = 926;
    static readonly IS_IPV4 = 927;
    static readonly IS_IPV4_COMPAT = 928;
    static readonly IS_IPV4_MAPPED = 929;
    static readonly IS_IPV6 = 930;
    static readonly IS_USED_LOCK = 931;
    static readonly LAST_INSERT_ID = 932;
    static readonly LCASE = 933;
    static readonly LEAST = 934;
    static readonly LENGTH = 935;
    static readonly LINEFROMTEXT = 936;
    static readonly LINEFROMWKB = 937;
    static readonly LINESTRINGFROMTEXT = 938;
    static readonly LINESTRINGFROMWKB = 939;
    static readonly LN = 940;
    static readonly LOAD_FILE = 941;
    static readonly LOCATE = 942;
    static readonly LOG = 943;
    static readonly LOG10 = 944;
    static readonly LOG2 = 945;
    static readonly LOWER = 946;
    static readonly LPAD = 947;
    static readonly LTRIM = 948;
    static readonly MAKEDATE = 949;
    static readonly MAKETIME = 950;
    static readonly MAKE_SET = 951;
    static readonly MASTER_POS_WAIT = 952;
    static readonly MBRCONTAINS = 953;
    static readonly MBRDISJOINT = 954;
    static readonly MBREQUAL = 955;
    static readonly MBRINTERSECTS = 956;
    static readonly MBROVERLAPS = 957;
    static readonly MBRTOUCHES = 958;
    static readonly MBRWITHIN = 959;
    static readonly MD5 = 960;
    static readonly MLINEFROMTEXT = 961;
    static readonly MLINEFROMWKB = 962;
    static readonly MONTHNAME = 963;
    static readonly MPOINTFROMTEXT = 964;
    static readonly MPOINTFROMWKB = 965;
    static readonly MPOLYFROMTEXT = 966;
    static readonly MPOLYFROMWKB = 967;
    static readonly MULTILINESTRINGFROMTEXT = 968;
    static readonly MULTILINESTRINGFROMWKB = 969;
    static readonly MULTIPOINTFROMTEXT = 970;
    static readonly MULTIPOINTFROMWKB = 971;
    static readonly MULTIPOLYGONFROMTEXT = 972;
    static readonly MULTIPOLYGONFROMWKB = 973;
    static readonly NAME_CONST = 974;
    static readonly NULLIF = 975;
    static readonly NUMGEOMETRIES = 976;
    static readonly NUMINTERIORRINGS = 977;
    static readonly NUMPOINTS = 978;
    static readonly OCT = 979;
    static readonly OCTET_LENGTH = 980;
    static readonly ORD = 981;
    static readonly OVERLAPS = 982;
    static readonly PERIOD_ADD = 983;
    static readonly PERIOD_DIFF = 984;
    static readonly PI = 985;
    static readonly POINTFROMTEXT = 986;
    static readonly POINTFROMWKB = 987;
    static readonly POINTN = 988;
    static readonly POLYFROMTEXT = 989;
    static readonly POLYFROMWKB = 990;
    static readonly POLYGONFROMTEXT = 991;
    static readonly POLYGONFROMWKB = 992;
    static readonly POW = 993;
    static readonly POWER = 994;
    static readonly QUOTE = 995;
    static readonly RADIANS = 996;
    static readonly RAND = 997;
    static readonly RANDOM_BYTES = 998;
    static readonly RELEASE_LOCK = 999;
    static readonly REVERSE = 1000;
    static readonly ROUND = 1001;
    static readonly ROW_COUNT = 1002;
    static readonly RPAD = 1003;
    static readonly RTRIM = 1004;
    static readonly SEC_TO_TIME = 1005;
    static readonly SECONDARY_ENGINE_ATTRIBUTE = 1006;
    static readonly SESSION_USER = 1007;
    static readonly SHA = 1008;
    static readonly SHA1 = 1009;
    static readonly SHA2 = 1010;
    static readonly SCHEMA_NAME = 1011;
    static readonly SIGN = 1012;
    static readonly SIN = 1013;
    static readonly SLEEP = 1014;
    static readonly SOUNDEX = 1015;
    static readonly SQL_THREAD_WAIT_AFTER_GTIDS = 1016;
    static readonly SQRT = 1017;
    static readonly SRID = 1018;
    static readonly STARTPOINT = 1019;
    static readonly STRCMP = 1020;
    static readonly STR_TO_DATE = 1021;
    static readonly ST_AREA = 1022;
    static readonly ST_ASBINARY = 1023;
    static readonly ST_ASTEXT = 1024;
    static readonly ST_ASWKB = 1025;
    static readonly ST_ASWKT = 1026;
    static readonly ST_BUFFER = 1027;
    static readonly ST_CENTROID = 1028;
    static readonly ST_CONTAINS = 1029;
    static readonly ST_CROSSES = 1030;
    static readonly ST_DIFFERENCE = 1031;
    static readonly ST_DIMENSION = 1032;
    static readonly ST_DISJOINT = 1033;
    static readonly ST_DISTANCE = 1034;
    static readonly ST_ENDPOINT = 1035;
    static readonly ST_ENVELOPE = 1036;
    static readonly ST_EQUALS = 1037;
    static readonly ST_EXTERIORRING = 1038;
    static readonly ST_GEOMCOLLFROMTEXT = 1039;
    static readonly ST_GEOMCOLLFROMTXT = 1040;
    static readonly ST_GEOMCOLLFROMWKB = 1041;
    static readonly ST_GEOMETRYCOLLECTIONFROMTEXT = 1042;
    static readonly ST_GEOMETRYCOLLECTIONFROMWKB = 1043;
    static readonly ST_GEOMETRYFROMTEXT = 1044;
    static readonly ST_GEOMETRYFROMWKB = 1045;
    static readonly ST_GEOMETRYN = 1046;
    static readonly ST_GEOMETRYTYPE = 1047;
    static readonly ST_GEOMFROMTEXT = 1048;
    static readonly ST_GEOMFROMWKB = 1049;
    static readonly ST_INTERIORRINGN = 1050;
    static readonly ST_INTERSECTION = 1051;
    static readonly ST_INTERSECTS = 1052;
    static readonly ST_ISCLOSED = 1053;
    static readonly ST_ISEMPTY = 1054;
    static readonly ST_ISSIMPLE = 1055;
    static readonly ST_LINEFROMTEXT = 1056;
    static readonly ST_LINEFROMWKB = 1057;
    static readonly ST_LINESTRINGFROMTEXT = 1058;
    static readonly ST_LINESTRINGFROMWKB = 1059;
    static readonly ST_NUMGEOMETRIES = 1060;
    static readonly ST_NUMINTERIORRING = 1061;
    static readonly ST_NUMINTERIORRINGS = 1062;
    static readonly ST_NUMPOINTS = 1063;
    static readonly ST_OVERLAPS = 1064;
    static readonly ST_POINTFROMTEXT = 1065;
    static readonly ST_POINTFROMWKB = 1066;
    static readonly ST_POINTN = 1067;
    static readonly ST_POLYFROMTEXT = 1068;
    static readonly ST_POLYFROMWKB = 1069;
    static readonly ST_POLYGONFROMTEXT = 1070;
    static readonly ST_POLYGONFROMWKB = 1071;
    static readonly ST_SRID = 1072;
    static readonly ST_STARTPOINT = 1073;
    static readonly ST_SYMDIFFERENCE = 1074;
    static readonly ST_TOUCHES = 1075;
    static readonly ST_UNION = 1076;
    static readonly ST_WITHIN = 1077;
    static readonly ST_X = 1078;
    static readonly ST_Y = 1079;
    static readonly SUBDATE = 1080;
    static readonly SUBSTRING_INDEX = 1081;
    static readonly SUBTIME = 1082;
    static readonly SYSTEM_USER = 1083;
    static readonly TAN = 1084;
    static readonly TIMEDIFF = 1085;
    static readonly TIMESTAMPADD = 1086;
    static readonly TIMESTAMPDIFF = 1087;
    static readonly TIME_FORMAT = 1088;
    static readonly TIME_TO_SEC = 1089;
    static readonly TOUCHES = 1090;
    static readonly TO_BASE64 = 1091;
    static readonly TO_DAYS = 1092;
    static readonly TO_SECONDS = 1093;
    static readonly UCASE = 1094;
    static readonly UNCOMPRESS = 1095;
    static readonly UNCOMPRESSED_LENGTH = 1096;
    static readonly UNHEX = 1097;
    static readonly UNIX_TIMESTAMP = 1098;
    static readonly UPDATEXML = 1099;
    static readonly UPPER = 1100;
    static readonly UUID = 1101;
    static readonly UUID_SHORT = 1102;
    static readonly VALIDATE_PASSWORD_STRENGTH = 1103;
    static readonly VERSION = 1104;
    static readonly WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS = 1105;
    static readonly WEEKDAY = 1106;
    static readonly WEEKOFYEAR = 1107;
    static readonly WEIGHT_STRING = 1108;
    static readonly WITHIN = 1109;
    static readonly YEARWEEK = 1110;
    static readonly Y_FUNCTION = 1111;
    static readonly X_FUNCTION = 1112;
    static readonly VIA = 1113;
    static readonly LASTVAL = 1114;
    static readonly NEXTVAL = 1115;
    static readonly SETVAL = 1116;
    static readonly PREVIOUS = 1117;
    static readonly PERSISTENT = 1118;
    static readonly BINLOG_MONITOR = 1119;
    static readonly BINLOG_REPLAY = 1120;
    static readonly FEDERATED_ADMIN = 1121;
    static readonly READ_ONLY_ADMIN = 1122;
    static readonly REPLICA = 1123;
    static readonly REPLICAS = 1124;
    static readonly REPLICATION_MASTER_ADMIN = 1125;
    static readonly MONITOR = 1126;
    static readonly READ_ONLY = 1127;
    static readonly REPLAY = 1128;
    static readonly VAR_ASSIGN = 1129;
    static readonly PLUS_ASSIGN = 1130;
    static readonly MINUS_ASSIGN = 1131;
    static readonly MULT_ASSIGN = 1132;
    static readonly DIV_ASSIGN = 1133;
    static readonly MOD_ASSIGN = 1134;
    static readonly AND_ASSIGN = 1135;
    static readonly XOR_ASSIGN = 1136;
    static readonly OR_ASSIGN = 1137;
    static readonly STAR = 1138;
    static readonly DIVIDE = 1139;
    static readonly MODULE = 1140;
    static readonly PLUS = 1141;
    static readonly MINUS = 1142;
    static readonly DIV = 1143;
    static readonly MOD = 1144;
    static readonly EQUAL_SYMBOL = 1145;
    static readonly GREATER_SYMBOL = 1146;
    static readonly LESS_SYMBOL = 1147;
    static readonly EXCLAMATION_SYMBOL = 1148;
    static readonly BIT_NOT_OP = 1149;
    static readonly BIT_OR_OP = 1150;
    static readonly BIT_AND_OP = 1151;
    static readonly BIT_XOR_OP = 1152;
    static readonly DOT = 1153;
    static readonly LR_BRACKET = 1154;
    static readonly RR_BRACKET = 1155;
    static readonly COMMA = 1156;
    static readonly SEMI = 1157;
    static readonly AT_SIGN = 1158;
    static readonly ZERO_DECIMAL = 1159;
    static readonly ONE_DECIMAL = 1160;
    static readonly TWO_DECIMAL = 1161;
    static readonly SINGLE_QUOTE_SYMB = 1162;
    static readonly DOUBLE_QUOTE_SYMB = 1163;
    static readonly REVERSE_QUOTE_SYMB = 1164;
    static readonly COLON_SYMB = 1165;
    static readonly CHARSET_REVERSE_QOUTE_STRING = 1166;
    static readonly FILESIZE_LITERAL = 1167;
    static readonly START_NATIONAL_STRING_LITERAL = 1168;
    static readonly STRING_LITERAL = 1169;
    static readonly DECIMAL_LITERAL = 1170;
    static readonly HEXADECIMAL_LITERAL = 1171;
    static readonly REAL_LITERAL = 1172;
    static readonly NULL_SPEC_LITERAL = 1173;
    static readonly BIT_STRING = 1174;
    static readonly STRING_CHARSET_NAME = 1175;
    static readonly DOT_ID = 1176;
    static readonly ID = 1177;
    static readonly REVERSE_QUOTE_ID = 1178;
    static readonly STRING_USER_NAME = 1179;
    static readonly IP_ADDRESS = 1180;
    static readonly STRING_USER_NAME_MARIADB = 1181;
    static readonly LOCAL_ID = 1182;
    static readonly GLOBAL_ID = 1183;
    static readonly ERROR_RECONGNIGION = 1184;
    static readonly LR_BRACKETRR_BRACKET = 1185;
    static readonly RULE_root = 0;
    static readonly RULE_sqlStatements = 1;
    static readonly RULE_sqlStatement = 2;
    static readonly RULE_setStatementFor = 3;
    static readonly RULE_emptyStatement_ = 4;
    static readonly RULE_ddlStatement = 5;
    static readonly RULE_dmlStatement = 6;
    static readonly RULE_transactionStatement = 7;
    static readonly RULE_replicationStatement = 8;
    static readonly RULE_preparedStatement = 9;
    static readonly RULE_compoundStatement = 10;
    static readonly RULE_administrationStatement = 11;
    static readonly RULE_utilityStatement = 12;
    static readonly RULE_createDatabase = 13;
    static readonly RULE_createEvent = 14;
    static readonly RULE_createIndex = 15;
    static readonly RULE_createLogfileGroup = 16;
    static readonly RULE_createProcedure = 17;
    static readonly RULE_createFunction = 18;
    static readonly RULE_createRole = 19;
    static readonly RULE_createServer = 20;
    static readonly RULE_createTable = 21;
    static readonly RULE_createTablespaceInnodb = 22;
    static readonly RULE_createTablespaceNdb = 23;
    static readonly RULE_createTrigger = 24;
    static readonly RULE_withClause = 25;
    static readonly RULE_commonTableExpressions = 26;
    static readonly RULE_cteName = 27;
    static readonly RULE_cteColumnName = 28;
    static readonly RULE_createView = 29;
    static readonly RULE_createSequence = 30;
    static readonly RULE_sequenceSpec = 31;
    static readonly RULE_createDatabaseOption = 32;
    static readonly RULE_charSet = 33;
    static readonly RULE_currentUserExpression = 34;
    static readonly RULE_ownerStatement = 35;
    static readonly RULE_scheduleExpression = 36;
    static readonly RULE_timestampValue = 37;
    static readonly RULE_intervalExpr = 38;
    static readonly RULE_intervalType = 39;
    static readonly RULE_enableType = 40;
    static readonly RULE_indexType = 41;
    static readonly RULE_indexOption = 42;
    static readonly RULE_procedureParameter = 43;
    static readonly RULE_functionParameter = 44;
    static readonly RULE_routineOption = 45;
    static readonly RULE_serverOption = 46;
    static readonly RULE_createDefinitions = 47;
    static readonly RULE_createDefinition = 48;
    static readonly RULE_columnDefinition = 49;
    static readonly RULE_columnConstraint = 50;
    static readonly RULE_tableConstraint = 51;
    static readonly RULE_referenceDefinition = 52;
    static readonly RULE_referenceAction = 53;
    static readonly RULE_referenceControlType = 54;
    static readonly RULE_indexColumnDefinition = 55;
    static readonly RULE_tableOption = 56;
    static readonly RULE_tableType = 57;
    static readonly RULE_tablespaceStorage = 58;
    static readonly RULE_partitionDefinitions = 59;
    static readonly RULE_partitionFunctionDefinition = 60;
    static readonly RULE_subpartitionFunctionDefinition = 61;
    static readonly RULE_partitionDefinition = 62;
    static readonly RULE_partitionDefinerAtom = 63;
    static readonly RULE_partitionDefinerVector = 64;
    static readonly RULE_subpartitionDefinition = 65;
    static readonly RULE_partitionOption = 66;
    static readonly RULE_alterDatabase = 67;
    static readonly RULE_alterEvent = 68;
    static readonly RULE_alterFunction = 69;
    static readonly RULE_alterInstance = 70;
    static readonly RULE_alterLogfileGroup = 71;
    static readonly RULE_alterProcedure = 72;
    static readonly RULE_alterServer = 73;
    static readonly RULE_alterTable = 74;
    static readonly RULE_alterTablespace = 75;
    static readonly RULE_alterView = 76;
    static readonly RULE_alterSequence = 77;
    static readonly RULE_alterSpecification = 78;
    static readonly RULE_alterPartitionSpecification = 79;
    static readonly RULE_dropDatabase = 80;
    static readonly RULE_dropEvent = 81;
    static readonly RULE_dropIndex = 82;
    static readonly RULE_dropLogfileGroup = 83;
    static readonly RULE_dropProcedure = 84;
    static readonly RULE_dropFunction = 85;
    static readonly RULE_dropServer = 86;
    static readonly RULE_dropTable = 87;
    static readonly RULE_dropTablespace = 88;
    static readonly RULE_dropTrigger = 89;
    static readonly RULE_dropView = 90;
    static readonly RULE_dropRole = 91;
    static readonly RULE_setRole = 92;
    static readonly RULE_dropSequence = 93;
    static readonly RULE_renameTable = 94;
    static readonly RULE_renameTableClause = 95;
    static readonly RULE_truncateTable = 96;
    static readonly RULE_callStatement = 97;
    static readonly RULE_deleteStatement = 98;
    static readonly RULE_doStatement = 99;
    static readonly RULE_handlerStatement = 100;
    static readonly RULE_insertStatement = 101;
    static readonly RULE_loadDataStatement = 102;
    static readonly RULE_loadXmlStatement = 103;
    static readonly RULE_replaceStatement = 104;
    static readonly RULE_selectStatement = 105;
    static readonly RULE_updateStatement = 106;
    static readonly RULE_valuesStatement = 107;
    static readonly RULE_insertStatementValue = 108;
    static readonly RULE_updatedElement = 109;
    static readonly RULE_assignmentField = 110;
    static readonly RULE_lockClause = 111;
    static readonly RULE_singleDeleteStatement = 112;
    static readonly RULE_multipleDeleteStatement = 113;
    static readonly RULE_handlerOpenStatement = 114;
    static readonly RULE_handlerReadIndexStatement = 115;
    static readonly RULE_handlerReadStatement = 116;
    static readonly RULE_handlerCloseStatement = 117;
    static readonly RULE_singleUpdateStatement = 118;
    static readonly RULE_multipleUpdateStatement = 119;
    static readonly RULE_orderByClause = 120;
    static readonly RULE_orderByExpression = 121;
    static readonly RULE_tableSources = 122;
    static readonly RULE_tableSource = 123;
    static readonly RULE_tableSourceItem = 124;
    static readonly RULE_indexHint = 125;
    static readonly RULE_indexHintType = 126;
    static readonly RULE_joinPart = 127;
    static readonly RULE_queryExpression = 128;
    static readonly RULE_queryExpressionNointo = 129;
    static readonly RULE_querySpecification = 130;
    static readonly RULE_querySpecificationNointo = 131;
    static readonly RULE_unionParenthesis = 132;
    static readonly RULE_unionStatement = 133;
    static readonly RULE_lateralStatement = 134;
    static readonly RULE_jsonTable = 135;
    static readonly RULE_jsonColumnList = 136;
    static readonly RULE_jsonColumn = 137;
    static readonly RULE_jsonOnEmpty = 138;
    static readonly RULE_jsonOnError = 139;
    static readonly RULE_selectSpec = 140;
    static readonly RULE_selectElements = 141;
    static readonly RULE_selectElement = 142;
    static readonly RULE_selectIntoExpression = 143;
    static readonly RULE_selectFieldsInto = 144;
    static readonly RULE_selectLinesInto = 145;
    static readonly RULE_fromClause = 146;
    static readonly RULE_groupByClause = 147;
    static readonly RULE_havingClause = 148;
    static readonly RULE_windowClause = 149;
    static readonly RULE_groupByItem = 150;
    static readonly RULE_limitClause = 151;
    static readonly RULE_limitClauseAtom = 152;
    static readonly RULE_startTransaction = 153;
    static readonly RULE_beginWork = 154;
    static readonly RULE_commitWork = 155;
    static readonly RULE_rollbackWork = 156;
    static readonly RULE_savepointStatement = 157;
    static readonly RULE_rollbackStatement = 158;
    static readonly RULE_releaseStatement = 159;
    static readonly RULE_lockTables = 160;
    static readonly RULE_unlockTables = 161;
    static readonly RULE_setAutocommitStatement = 162;
    static readonly RULE_setTransactionStatement = 163;
    static readonly RULE_transactionMode = 164;
    static readonly RULE_lockTableElement = 165;
    static readonly RULE_lockAction = 166;
    static readonly RULE_transactionOption = 167;
    static readonly RULE_transactionLevel = 168;
    static readonly RULE_changeMaster = 169;
    static readonly RULE_changeReplicationFilter = 170;
    static readonly RULE_purgeBinaryLogs = 171;
    static readonly RULE_resetMaster = 172;
    static readonly RULE_resetSlave = 173;
    static readonly RULE_startSlave = 174;
    static readonly RULE_stopSlave = 175;
    static readonly RULE_startGroupReplication = 176;
    static readonly RULE_stopGroupReplication = 177;
    static readonly RULE_masterOption = 178;
    static readonly RULE_stringMasterOption = 179;
    static readonly RULE_decimalMasterOption = 180;
    static readonly RULE_boolMasterOption = 181;
    static readonly RULE_channelOption = 182;
    static readonly RULE_replicationFilter = 183;
    static readonly RULE_tablePair = 184;
    static readonly RULE_threadType = 185;
    static readonly RULE_untilOption = 186;
    static readonly RULE_connectionOption = 187;
    static readonly RULE_gtuidSet = 188;
    static readonly RULE_xaStartTransaction = 189;
    static readonly RULE_xaEndTransaction = 190;
    static readonly RULE_xaPrepareStatement = 191;
    static readonly RULE_xaCommitWork = 192;
    static readonly RULE_xaRollbackWork = 193;
    static readonly RULE_xaRecoverWork = 194;
    static readonly RULE_prepareStatement = 195;
    static readonly RULE_executeStatement = 196;
    static readonly RULE_deallocatePrepare = 197;
    static readonly RULE_routineBody = 198;
    static readonly RULE_blockStatement = 199;
    static readonly RULE_caseStatement = 200;
    static readonly RULE_ifStatement = 201;
    static readonly RULE_iterateStatement = 202;
    static readonly RULE_leaveStatement = 203;
    static readonly RULE_loopStatement = 204;
    static readonly RULE_repeatStatement = 205;
    static readonly RULE_returnStatement = 206;
    static readonly RULE_whileStatement = 207;
    static readonly RULE_cursorStatement = 208;
    static readonly RULE_declareVariable = 209;
    static readonly RULE_declareCondition = 210;
    static readonly RULE_declareCursor = 211;
    static readonly RULE_declareHandler = 212;
    static readonly RULE_handlerConditionValue = 213;
    static readonly RULE_procedureSqlStatement = 214;
    static readonly RULE_caseAlternative = 215;
    static readonly RULE_elifAlternative = 216;
    static readonly RULE_alterUser = 217;
    static readonly RULE_createUser = 218;
    static readonly RULE_dropUser = 219;
    static readonly RULE_grantStatement = 220;
    static readonly RULE_roleOption = 221;
    static readonly RULE_grantProxy = 222;
    static readonly RULE_renameUser = 223;
    static readonly RULE_revokeStatement = 224;
    static readonly RULE_revokeProxy = 225;
    static readonly RULE_setPasswordStatement = 226;
    static readonly RULE_userSpecification = 227;
    static readonly RULE_userAuthOption = 228;
    static readonly RULE_authenticationRule = 229;
    static readonly RULE_tlsOption = 230;
    static readonly RULE_userResourceOption = 231;
    static readonly RULE_userPasswordOption = 232;
    static readonly RULE_userLockOption = 233;
    static readonly RULE_privelegeClause = 234;
    static readonly RULE_privilege = 235;
    static readonly RULE_privilegeLevel = 236;
    static readonly RULE_renameUserClause = 237;
    static readonly RULE_analyzeTable = 238;
    static readonly RULE_checkTable = 239;
    static readonly RULE_checksumTable = 240;
    static readonly RULE_optimizeTable = 241;
    static readonly RULE_repairTable = 242;
    static readonly RULE_checkTableOption = 243;
    static readonly RULE_createUdfunction = 244;
    static readonly RULE_installPlugin = 245;
    static readonly RULE_uninstallPlugin = 246;
    static readonly RULE_setStatement = 247;
    static readonly RULE_showStatement = 248;
    static readonly RULE_explainStatement = 249;
    static readonly RULE_variableClause = 250;
    static readonly RULE_showCommonEntity = 251;
    static readonly RULE_showFilter = 252;
    static readonly RULE_showGlobalInfoClause = 253;
    static readonly RULE_showSchemaEntity = 254;
    static readonly RULE_showProfileType = 255;
    static readonly RULE_binlogStatement = 256;
    static readonly RULE_cacheIndexStatement = 257;
    static readonly RULE_flushStatement = 258;
    static readonly RULE_killStatement = 259;
    static readonly RULE_loadIndexIntoCache = 260;
    static readonly RULE_resetStatement = 261;
    static readonly RULE_shutdownStatement = 262;
    static readonly RULE_tableIndexes = 263;
    static readonly RULE_flushOption = 264;
    static readonly RULE_flushTableOption = 265;
    static readonly RULE_loadedTableIndexes = 266;
    static readonly RULE_simpleDescribeStatement = 267;
    static readonly RULE_fullDescribeStatement = 268;
    static readonly RULE_formatJsonStatement = 269;
    static readonly RULE_helpStatement = 270;
    static readonly RULE_useStatement = 271;
    static readonly RULE_signalStatement = 272;
    static readonly RULE_resignalStatement = 273;
    static readonly RULE_signalConditionInformation = 274;
    static readonly RULE_diagnosticsStatement = 275;
    static readonly RULE_diagnosticsConditionInformationName = 276;
    static readonly RULE_describeObjectClause = 277;
    static readonly RULE_fullId = 278;
    static readonly RULE_tableName = 279;
    static readonly RULE_roleName = 280;
    static readonly RULE_fullColumnName = 281;
    static readonly RULE_indexColumnName = 282;
    static readonly RULE_userName = 283;
    static readonly RULE_mysqlVariable = 284;
    static readonly RULE_charsetName = 285;
    static readonly RULE_collationName = 286;
    static readonly RULE_engineName = 287;
    static readonly RULE_engineNameBase = 288;
    static readonly RULE_encryptedLiteral = 289;
    static readonly RULE_uuidSet = 290;
    static readonly RULE_xid = 291;
    static readonly RULE_xuidStringId = 292;
    static readonly RULE_authPlugin = 293;
    static readonly RULE_uid = 294;
    static readonly RULE_simpleId = 295;
    static readonly RULE_dottedId = 296;
    static readonly RULE_decimalLiteral = 297;
    static readonly RULE_fileSizeLiteral = 298;
    static readonly RULE_stringLiteral = 299;
    static readonly RULE_booleanLiteral = 300;
    static readonly RULE_hexadecimalLiteral = 301;
    static readonly RULE_nullNotnull = 302;
    static readonly RULE_constant = 303;
    static readonly RULE_dataType = 304;
    static readonly RULE_collectionOptions = 305;
    static readonly RULE_convertedDataType = 306;
    static readonly RULE_lengthOneDimension = 307;
    static readonly RULE_lengthTwoDimension = 308;
    static readonly RULE_lengthTwoOptionalDimension = 309;
    static readonly RULE_uidList = 310;
    static readonly RULE_tables = 311;
    static readonly RULE_indexColumnNames = 312;
    static readonly RULE_expressions = 313;
    static readonly RULE_expressionsWithDefaults = 314;
    static readonly RULE_constants = 315;
    static readonly RULE_simpleStrings = 316;
    static readonly RULE_userVariables = 317;
    static readonly RULE_defaultValue = 318;
    static readonly RULE_currentTimestamp = 319;
    static readonly RULE_expressionOrDefault = 320;
    static readonly RULE_ifExists = 321;
    static readonly RULE_ifNotExists = 322;
    static readonly RULE_orReplace = 323;
    static readonly RULE_waitNowaitClause = 324;
    static readonly RULE_lockOption = 325;
    static readonly RULE_functionCall = 326;
    static readonly RULE_specificFunction = 327;
    static readonly RULE_caseFuncAlternative = 328;
    static readonly RULE_levelsInWeightString = 329;
    static readonly RULE_levelInWeightListElement = 330;
    static readonly RULE_aggregateWindowedFunction = 331;
    static readonly RULE_nonAggregateWindowedFunction = 332;
    static readonly RULE_overClause = 333;
    static readonly RULE_windowSpec = 334;
    static readonly RULE_windowName = 335;
    static readonly RULE_frameClause = 336;
    static readonly RULE_frameUnits = 337;
    static readonly RULE_frameExtent = 338;
    static readonly RULE_frameBetween = 339;
    static readonly RULE_frameRange = 340;
    static readonly RULE_partitionClause = 341;
    static readonly RULE_scalarFunctionName = 342;
    static readonly RULE_passwordFunctionClause = 343;
    static readonly RULE_functionArgs = 344;
    static readonly RULE_functionArg = 345;
    static readonly RULE_expression = 346;
    static readonly RULE_predicate = 347;
    static readonly RULE_expressionAtom = 348;
    static readonly RULE_unaryOperator = 349;
    static readonly RULE_comparisonOperator = 350;
    static readonly RULE_logicalOperator = 351;
    static readonly RULE_bitOperator = 352;
    static readonly RULE_mathOperator = 353;
    static readonly RULE_jsonOperator = 354;
    static readonly RULE_charsetNameBase = 355;
    static readonly RULE_transactionLevelBase = 356;
    static readonly RULE_privilegesBase = 357;
    static readonly RULE_intervalTypeBase = 358;
    static readonly RULE_dataTypeBase = 359;
    static readonly RULE_keywordsCanBeId = 360;
    static readonly RULE_functionNameBase = 361;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    get vocabulary(): Vocabulary;
    get grammarFileName(): string;
    get ruleNames(): string[];
    get serializedATN(): string;
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    constructor(input: TokenStream);
    root(): RootContext;
    sqlStatements(): SqlStatementsContext;
    sqlStatement(): SqlStatementContext;
    setStatementFor(): SetStatementForContext;
    emptyStatement_(): EmptyStatement_Context;
    ddlStatement(): DdlStatementContext;
    dmlStatement(): DmlStatementContext;
    transactionStatement(): TransactionStatementContext;
    replicationStatement(): ReplicationStatementContext;
    preparedStatement(): PreparedStatementContext;
    compoundStatement(): CompoundStatementContext;
    administrationStatement(): AdministrationStatementContext;
    utilityStatement(): UtilityStatementContext;
    createDatabase(): CreateDatabaseContext;
    createEvent(): CreateEventContext;
    createIndex(): CreateIndexContext;
    createLogfileGroup(): CreateLogfileGroupContext;
    createProcedure(): CreateProcedureContext;
    createFunction(): CreateFunctionContext;
    createRole(): CreateRoleContext;
    createServer(): CreateServerContext;
    createTable(): CreateTableContext;
    createTablespaceInnodb(): CreateTablespaceInnodbContext;
    createTablespaceNdb(): CreateTablespaceNdbContext;
    createTrigger(): CreateTriggerContext;
    withClause(): WithClauseContext;
    commonTableExpressions(): CommonTableExpressionsContext;
    cteName(): CteNameContext;
    cteColumnName(): CteColumnNameContext;
    createView(): CreateViewContext;
    createSequence(): CreateSequenceContext;
    sequenceSpec(): SequenceSpecContext;
    createDatabaseOption(): CreateDatabaseOptionContext;
    charSet(): CharSetContext;
    currentUserExpression(): CurrentUserExpressionContext;
    ownerStatement(): OwnerStatementContext;
    scheduleExpression(): ScheduleExpressionContext;
    timestampValue(): TimestampValueContext;
    intervalExpr(): IntervalExprContext;
    intervalType(): IntervalTypeContext;
    enableType(): EnableTypeContext;
    indexType(): IndexTypeContext;
    indexOption(): IndexOptionContext;
    procedureParameter(): ProcedureParameterContext;
    functionParameter(): FunctionParameterContext;
    routineOption(): RoutineOptionContext;
    serverOption(): ServerOptionContext;
    createDefinitions(): CreateDefinitionsContext;
    createDefinition(): CreateDefinitionContext;
    columnDefinition(): ColumnDefinitionContext;
    columnConstraint(): ColumnConstraintContext;
    tableConstraint(): TableConstraintContext;
    referenceDefinition(): ReferenceDefinitionContext;
    referenceAction(): ReferenceActionContext;
    referenceControlType(): ReferenceControlTypeContext;
    indexColumnDefinition(): IndexColumnDefinitionContext;
    tableOption(): TableOptionContext;
    tableType(): TableTypeContext;
    tablespaceStorage(): TablespaceStorageContext;
    partitionDefinitions(): PartitionDefinitionsContext;
    partitionFunctionDefinition(): PartitionFunctionDefinitionContext;
    subpartitionFunctionDefinition(): SubpartitionFunctionDefinitionContext;
    partitionDefinition(): PartitionDefinitionContext;
    partitionDefinerAtom(): PartitionDefinerAtomContext;
    partitionDefinerVector(): PartitionDefinerVectorContext;
    subpartitionDefinition(): SubpartitionDefinitionContext;
    partitionOption(): PartitionOptionContext;
    alterDatabase(): AlterDatabaseContext;
    alterEvent(): AlterEventContext;
    alterFunction(): AlterFunctionContext;
    alterInstance(): AlterInstanceContext;
    alterLogfileGroup(): AlterLogfileGroupContext;
    alterProcedure(): AlterProcedureContext;
    alterServer(): AlterServerContext;
    alterTable(): AlterTableContext;
    alterTablespace(): AlterTablespaceContext;
    alterView(): AlterViewContext;
    alterSequence(): AlterSequenceContext;
    alterSpecification(): AlterSpecificationContext;
    alterPartitionSpecification(): AlterPartitionSpecificationContext;
    dropDatabase(): DropDatabaseContext;
    dropEvent(): DropEventContext;
    dropIndex(): DropIndexContext;
    dropLogfileGroup(): DropLogfileGroupContext;
    dropProcedure(): DropProcedureContext;
    dropFunction(): DropFunctionContext;
    dropServer(): DropServerContext;
    dropTable(): DropTableContext;
    dropTablespace(): DropTablespaceContext;
    dropTrigger(): DropTriggerContext;
    dropView(): DropViewContext;
    dropRole(): DropRoleContext;
    setRole(): SetRoleContext;
    dropSequence(): DropSequenceContext;
    renameTable(): RenameTableContext;
    renameTableClause(): RenameTableClauseContext;
    truncateTable(): TruncateTableContext;
    callStatement(): CallStatementContext;
    deleteStatement(): DeleteStatementContext;
    doStatement(): DoStatementContext;
    handlerStatement(): HandlerStatementContext;
    insertStatement(): InsertStatementContext;
    loadDataStatement(): LoadDataStatementContext;
    loadXmlStatement(): LoadXmlStatementContext;
    replaceStatement(): ReplaceStatementContext;
    selectStatement(): SelectStatementContext;
    updateStatement(): UpdateStatementContext;
    valuesStatement(): ValuesStatementContext;
    insertStatementValue(): InsertStatementValueContext;
    updatedElement(): UpdatedElementContext;
    assignmentField(): AssignmentFieldContext;
    lockClause(): LockClauseContext;
    singleDeleteStatement(): SingleDeleteStatementContext;
    multipleDeleteStatement(): MultipleDeleteStatementContext;
    handlerOpenStatement(): HandlerOpenStatementContext;
    handlerReadIndexStatement(): HandlerReadIndexStatementContext;
    handlerReadStatement(): HandlerReadStatementContext;
    handlerCloseStatement(): HandlerCloseStatementContext;
    singleUpdateStatement(): SingleUpdateStatementContext;
    multipleUpdateStatement(): MultipleUpdateStatementContext;
    orderByClause(): OrderByClauseContext;
    orderByExpression(): OrderByExpressionContext;
    tableSources(): TableSourcesContext;
    tableSource(): TableSourceContext;
    tableSourceItem(): TableSourceItemContext;
    indexHint(): IndexHintContext;
    indexHintType(): IndexHintTypeContext;
    joinPart(): JoinPartContext;
    queryExpression(): QueryExpressionContext;
    queryExpressionNointo(): QueryExpressionNointoContext;
    querySpecification(): QuerySpecificationContext;
    querySpecificationNointo(): QuerySpecificationNointoContext;
    unionParenthesis(): UnionParenthesisContext;
    unionStatement(): UnionStatementContext;
    lateralStatement(): LateralStatementContext;
    jsonTable(): JsonTableContext;
    jsonColumnList(): JsonColumnListContext;
    jsonColumn(): JsonColumnContext;
    jsonOnEmpty(): JsonOnEmptyContext;
    jsonOnError(): JsonOnErrorContext;
    selectSpec(): SelectSpecContext;
    selectElements(): SelectElementsContext;
    selectElement(): SelectElementContext;
    selectIntoExpression(): SelectIntoExpressionContext;
    selectFieldsInto(): SelectFieldsIntoContext;
    selectLinesInto(): SelectLinesIntoContext;
    fromClause(): FromClauseContext;
    groupByClause(): GroupByClauseContext;
    havingClause(): HavingClauseContext;
    windowClause(): WindowClauseContext;
    groupByItem(): GroupByItemContext;
    limitClause(): LimitClauseContext;
    limitClauseAtom(): LimitClauseAtomContext;
    startTransaction(): StartTransactionContext;
    beginWork(): BeginWorkContext;
    commitWork(): CommitWorkContext;
    rollbackWork(): RollbackWorkContext;
    savepointStatement(): SavepointStatementContext;
    rollbackStatement(): RollbackStatementContext;
    releaseStatement(): ReleaseStatementContext;
    lockTables(): LockTablesContext;
    unlockTables(): UnlockTablesContext;
    setAutocommitStatement(): SetAutocommitStatementContext;
    setTransactionStatement(): SetTransactionStatementContext;
    transactionMode(): TransactionModeContext;
    lockTableElement(): LockTableElementContext;
    lockAction(): LockActionContext;
    transactionOption(): TransactionOptionContext;
    transactionLevel(): TransactionLevelContext;
    changeMaster(): ChangeMasterContext;
    changeReplicationFilter(): ChangeReplicationFilterContext;
    purgeBinaryLogs(): PurgeBinaryLogsContext;
    resetMaster(): ResetMasterContext;
    resetSlave(): ResetSlaveContext;
    startSlave(): StartSlaveContext;
    stopSlave(): StopSlaveContext;
    startGroupReplication(): StartGroupReplicationContext;
    stopGroupReplication(): StopGroupReplicationContext;
    masterOption(): MasterOptionContext;
    stringMasterOption(): StringMasterOptionContext;
    decimalMasterOption(): DecimalMasterOptionContext;
    boolMasterOption(): BoolMasterOptionContext;
    channelOption(): ChannelOptionContext;
    replicationFilter(): ReplicationFilterContext;
    tablePair(): TablePairContext;
    threadType(): ThreadTypeContext;
    untilOption(): UntilOptionContext;
    connectionOption(): ConnectionOptionContext;
    gtuidSet(): GtuidSetContext;
    xaStartTransaction(): XaStartTransactionContext;
    xaEndTransaction(): XaEndTransactionContext;
    xaPrepareStatement(): XaPrepareStatementContext;
    xaCommitWork(): XaCommitWorkContext;
    xaRollbackWork(): XaRollbackWorkContext;
    xaRecoverWork(): XaRecoverWorkContext;
    prepareStatement(): PrepareStatementContext;
    executeStatement(): ExecuteStatementContext;
    deallocatePrepare(): DeallocatePrepareContext;
    routineBody(): RoutineBodyContext;
    blockStatement(): BlockStatementContext;
    caseStatement(): CaseStatementContext;
    ifStatement(): IfStatementContext;
    iterateStatement(): IterateStatementContext;
    leaveStatement(): LeaveStatementContext;
    loopStatement(): LoopStatementContext;
    repeatStatement(): RepeatStatementContext;
    returnStatement(): ReturnStatementContext;
    whileStatement(): WhileStatementContext;
    cursorStatement(): CursorStatementContext;
    declareVariable(): DeclareVariableContext;
    declareCondition(): DeclareConditionContext;
    declareCursor(): DeclareCursorContext;
    declareHandler(): DeclareHandlerContext;
    handlerConditionValue(): HandlerConditionValueContext;
    procedureSqlStatement(): ProcedureSqlStatementContext;
    caseAlternative(): CaseAlternativeContext;
    elifAlternative(): ElifAlternativeContext;
    alterUser(): AlterUserContext;
    createUser(): CreateUserContext;
    dropUser(): DropUserContext;
    grantStatement(): GrantStatementContext;
    roleOption(): RoleOptionContext;
    grantProxy(): GrantProxyContext;
    renameUser(): RenameUserContext;
    revokeStatement(): RevokeStatementContext;
    revokeProxy(): RevokeProxyContext;
    setPasswordStatement(): SetPasswordStatementContext;
    userSpecification(): UserSpecificationContext;
    userAuthOption(): UserAuthOptionContext;
    authenticationRule(): AuthenticationRuleContext;
    tlsOption(): TlsOptionContext;
    userResourceOption(): UserResourceOptionContext;
    userPasswordOption(): UserPasswordOptionContext;
    userLockOption(): UserLockOptionContext;
    privelegeClause(): PrivelegeClauseContext;
    privilege(): PrivilegeContext;
    privilegeLevel(): PrivilegeLevelContext;
    renameUserClause(): RenameUserClauseContext;
    analyzeTable(): AnalyzeTableContext;
    checkTable(): CheckTableContext;
    checksumTable(): ChecksumTableContext;
    optimizeTable(): OptimizeTableContext;
    repairTable(): RepairTableContext;
    checkTableOption(): CheckTableOptionContext;
    createUdfunction(): CreateUdfunctionContext;
    installPlugin(): InstallPluginContext;
    uninstallPlugin(): UninstallPluginContext;
    setStatement(): SetStatementContext;
    showStatement(): ShowStatementContext;
    explainStatement(): ExplainStatementContext;
    variableClause(): VariableClauseContext;
    showCommonEntity(): ShowCommonEntityContext;
    showFilter(): ShowFilterContext;
    showGlobalInfoClause(): ShowGlobalInfoClauseContext;
    showSchemaEntity(): ShowSchemaEntityContext;
    showProfileType(): ShowProfileTypeContext;
    binlogStatement(): BinlogStatementContext;
    cacheIndexStatement(): CacheIndexStatementContext;
    flushStatement(): FlushStatementContext;
    killStatement(): KillStatementContext;
    loadIndexIntoCache(): LoadIndexIntoCacheContext;
    resetStatement(): ResetStatementContext;
    shutdownStatement(): ShutdownStatementContext;
    tableIndexes(): TableIndexesContext;
    flushOption(): FlushOptionContext;
    flushTableOption(): FlushTableOptionContext;
    loadedTableIndexes(): LoadedTableIndexesContext;
    simpleDescribeStatement(): SimpleDescribeStatementContext;
    fullDescribeStatement(): FullDescribeStatementContext;
    formatJsonStatement(): FormatJsonStatementContext;
    helpStatement(): HelpStatementContext;
    useStatement(): UseStatementContext;
    signalStatement(): SignalStatementContext;
    resignalStatement(): ResignalStatementContext;
    signalConditionInformation(): SignalConditionInformationContext;
    diagnosticsStatement(): DiagnosticsStatementContext;
    diagnosticsConditionInformationName(): DiagnosticsConditionInformationNameContext;
    describeObjectClause(): DescribeObjectClauseContext;
    fullId(): FullIdContext;
    tableName(): TableNameContext;
    roleName(): RoleNameContext;
    fullColumnName(): FullColumnNameContext;
    indexColumnName(): IndexColumnNameContext;
    userName(): UserNameContext;
    mysqlVariable(): MysqlVariableContext;
    charsetName(): CharsetNameContext;
    collationName(): CollationNameContext;
    engineName(): EngineNameContext;
    engineNameBase(): EngineNameBaseContext;
    encryptedLiteral(): EncryptedLiteralContext;
    uuidSet(): UuidSetContext;
    xid(): XidContext;
    xuidStringId(): XuidStringIdContext;
    authPlugin(): AuthPluginContext;
    uid(): UidContext;
    simpleId(): SimpleIdContext;
    dottedId(): DottedIdContext;
    decimalLiteral(): DecimalLiteralContext;
    fileSizeLiteral(): FileSizeLiteralContext;
    stringLiteral(): StringLiteralContext;
    booleanLiteral(): BooleanLiteralContext;
    hexadecimalLiteral(): HexadecimalLiteralContext;
    nullNotnull(): NullNotnullContext;
    constant(): ConstantContext;
    dataType(): DataTypeContext;
    collectionOptions(): CollectionOptionsContext;
    convertedDataType(): ConvertedDataTypeContext;
    lengthOneDimension(): LengthOneDimensionContext;
    lengthTwoDimension(): LengthTwoDimensionContext;
    lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext;
    uidList(): UidListContext;
    tables(): TablesContext;
    indexColumnNames(): IndexColumnNamesContext;
    expressions(): ExpressionsContext;
    expressionsWithDefaults(): ExpressionsWithDefaultsContext;
    constants(): ConstantsContext;
    simpleStrings(): SimpleStringsContext;
    userVariables(): UserVariablesContext;
    defaultValue(): DefaultValueContext;
    currentTimestamp(): CurrentTimestampContext;
    expressionOrDefault(): ExpressionOrDefaultContext;
    ifExists(): IfExistsContext;
    ifNotExists(): IfNotExistsContext;
    orReplace(): OrReplaceContext;
    waitNowaitClause(): WaitNowaitClauseContext;
    lockOption(): LockOptionContext;
    functionCall(): FunctionCallContext;
    specificFunction(): SpecificFunctionContext;
    caseFuncAlternative(): CaseFuncAlternativeContext;
    levelsInWeightString(): LevelsInWeightStringContext;
    levelInWeightListElement(): LevelInWeightListElementContext;
    aggregateWindowedFunction(): AggregateWindowedFunctionContext;
    nonAggregateWindowedFunction(): NonAggregateWindowedFunctionContext;
    overClause(): OverClauseContext;
    windowSpec(): WindowSpecContext;
    windowName(): WindowNameContext;
    frameClause(): FrameClauseContext;
    frameUnits(): FrameUnitsContext;
    frameExtent(): FrameExtentContext;
    frameBetween(): FrameBetweenContext;
    frameRange(): FrameRangeContext;
    partitionClause(): PartitionClauseContext;
    scalarFunctionName(): ScalarFunctionNameContext;
    passwordFunctionClause(): PasswordFunctionClauseContext;
    functionArgs(): FunctionArgsContext;
    functionArg(): FunctionArgContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    predicate(): PredicateContext;
    predicate(_p: number): PredicateContext;
    expressionAtom(): ExpressionAtomContext;
    expressionAtom(_p: number): ExpressionAtomContext;
    unaryOperator(): UnaryOperatorContext;
    comparisonOperator(): ComparisonOperatorContext;
    logicalOperator(): LogicalOperatorContext;
    bitOperator(): BitOperatorContext;
    mathOperator(): MathOperatorContext;
    jsonOperator(): JsonOperatorContext;
    charsetNameBase(): CharsetNameBaseContext;
    transactionLevelBase(): TransactionLevelBaseContext;
    privilegesBase(): PrivilegesBaseContext;
    intervalTypeBase(): IntervalTypeBaseContext;
    dataTypeBase(): DataTypeBaseContext;
    keywordsCanBeId(): KeywordsCanBeIdContext;
    functionNameBase(): FunctionNameBaseContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private expression_sempred;
    private predicate_sempred;
    private expressionAtom_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    private static readonly _serializedATNSegment3;
    private static readonly _serializedATNSegment4;
    private static readonly _serializedATNSegment5;
    private static readonly _serializedATNSegment6;
    private static readonly _serializedATNSegment7;
    private static readonly _serializedATNSegment8;
    private static readonly _serializedATNSegment9;
    private static readonly _serializedATNSegment10;
    private static readonly _serializedATNSegment11;
    private static readonly _serializedATNSegment12;
    private static readonly _serializedATNSegment13;
    private static readonly _serializedATNSegment14;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static get _ATN(): ATN;
}
export declare class RootContext extends ParserRuleContext {
    EOF(): TerminalNode;
    sqlStatements(): SqlStatementsContext | undefined;
    MINUS(): TerminalNode[];
    MINUS(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SqlStatementsContext extends ParserRuleContext {
    sqlStatement(): SqlStatementContext[];
    sqlStatement(i: number): SqlStatementContext;
    emptyStatement_(): EmptyStatement_Context[];
    emptyStatement_(i: number): EmptyStatement_Context;
    SEMI(): TerminalNode[];
    SEMI(i: number): TerminalNode;
    MINUS(): TerminalNode[];
    MINUS(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SqlStatementContext extends ParserRuleContext {
    ddlStatement(): DdlStatementContext | undefined;
    dmlStatement(): DmlStatementContext | undefined;
    transactionStatement(): TransactionStatementContext | undefined;
    replicationStatement(): ReplicationStatementContext | undefined;
    preparedStatement(): PreparedStatementContext | undefined;
    administrationStatement(): AdministrationStatementContext | undefined;
    utilityStatement(): UtilityStatementContext | undefined;
    setStatementFor(): SetStatementForContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetStatementForContext extends ParserRuleContext {
    SET(): TerminalNode;
    STATEMENT(): TerminalNode;
    ID(): TerminalNode[];
    ID(i: number): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    constant(): ConstantContext[];
    constant(i: number): ConstantContext;
    FOR(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class EmptyStatement_Context extends ParserRuleContext {
    SEMI(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DdlStatementContext extends ParserRuleContext {
    createDatabase(): CreateDatabaseContext | undefined;
    createEvent(): CreateEventContext | undefined;
    createIndex(): CreateIndexContext | undefined;
    createLogfileGroup(): CreateLogfileGroupContext | undefined;
    createProcedure(): CreateProcedureContext | undefined;
    createFunction(): CreateFunctionContext | undefined;
    createServer(): CreateServerContext | undefined;
    createTable(): CreateTableContext | undefined;
    createTablespaceInnodb(): CreateTablespaceInnodbContext | undefined;
    createTablespaceNdb(): CreateTablespaceNdbContext | undefined;
    createTrigger(): CreateTriggerContext | undefined;
    createView(): CreateViewContext | undefined;
    createRole(): CreateRoleContext | undefined;
    createSequence(): CreateSequenceContext | undefined;
    alterDatabase(): AlterDatabaseContext | undefined;
    alterEvent(): AlterEventContext | undefined;
    alterFunction(): AlterFunctionContext | undefined;
    alterInstance(): AlterInstanceContext | undefined;
    alterLogfileGroup(): AlterLogfileGroupContext | undefined;
    alterProcedure(): AlterProcedureContext | undefined;
    alterServer(): AlterServerContext | undefined;
    alterTable(): AlterTableContext | undefined;
    alterTablespace(): AlterTablespaceContext | undefined;
    alterView(): AlterViewContext | undefined;
    alterSequence(): AlterSequenceContext | undefined;
    dropDatabase(): DropDatabaseContext | undefined;
    dropEvent(): DropEventContext | undefined;
    dropIndex(): DropIndexContext | undefined;
    dropLogfileGroup(): DropLogfileGroupContext | undefined;
    dropProcedure(): DropProcedureContext | undefined;
    dropFunction(): DropFunctionContext | undefined;
    dropServer(): DropServerContext | undefined;
    dropTable(): DropTableContext | undefined;
    dropTablespace(): DropTablespaceContext | undefined;
    dropTrigger(): DropTriggerContext | undefined;
    dropView(): DropViewContext | undefined;
    dropRole(): DropRoleContext | undefined;
    dropSequence(): DropSequenceContext | undefined;
    setRole(): SetRoleContext | undefined;
    renameTable(): RenameTableContext | undefined;
    truncateTable(): TruncateTableContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DmlStatementContext extends ParserRuleContext {
    selectStatement(): SelectStatementContext | undefined;
    insertStatement(): InsertStatementContext | undefined;
    updateStatement(): UpdateStatementContext | undefined;
    deleteStatement(): DeleteStatementContext | undefined;
    replaceStatement(): ReplaceStatementContext | undefined;
    callStatement(): CallStatementContext | undefined;
    loadDataStatement(): LoadDataStatementContext | undefined;
    loadXmlStatement(): LoadXmlStatementContext | undefined;
    doStatement(): DoStatementContext | undefined;
    handlerStatement(): HandlerStatementContext | undefined;
    valuesStatement(): ValuesStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TransactionStatementContext extends ParserRuleContext {
    startTransaction(): StartTransactionContext | undefined;
    beginWork(): BeginWorkContext | undefined;
    commitWork(): CommitWorkContext | undefined;
    rollbackWork(): RollbackWorkContext | undefined;
    savepointStatement(): SavepointStatementContext | undefined;
    rollbackStatement(): RollbackStatementContext | undefined;
    releaseStatement(): ReleaseStatementContext | undefined;
    lockTables(): LockTablesContext | undefined;
    unlockTables(): UnlockTablesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ReplicationStatementContext extends ParserRuleContext {
    changeMaster(): ChangeMasterContext | undefined;
    changeReplicationFilter(): ChangeReplicationFilterContext | undefined;
    purgeBinaryLogs(): PurgeBinaryLogsContext | undefined;
    resetMaster(): ResetMasterContext | undefined;
    resetSlave(): ResetSlaveContext | undefined;
    startSlave(): StartSlaveContext | undefined;
    stopSlave(): StopSlaveContext | undefined;
    startGroupReplication(): StartGroupReplicationContext | undefined;
    stopGroupReplication(): StopGroupReplicationContext | undefined;
    xaStartTransaction(): XaStartTransactionContext | undefined;
    xaEndTransaction(): XaEndTransactionContext | undefined;
    xaPrepareStatement(): XaPrepareStatementContext | undefined;
    xaCommitWork(): XaCommitWorkContext | undefined;
    xaRollbackWork(): XaRollbackWorkContext | undefined;
    xaRecoverWork(): XaRecoverWorkContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PreparedStatementContext extends ParserRuleContext {
    prepareStatement(): PrepareStatementContext | undefined;
    executeStatement(): ExecuteStatementContext | undefined;
    deallocatePrepare(): DeallocatePrepareContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CompoundStatementContext extends ParserRuleContext {
    blockStatement(): BlockStatementContext | undefined;
    caseStatement(): CaseStatementContext | undefined;
    ifStatement(): IfStatementContext | undefined;
    leaveStatement(): LeaveStatementContext | undefined;
    loopStatement(): LoopStatementContext | undefined;
    repeatStatement(): RepeatStatementContext | undefined;
    whileStatement(): WhileStatementContext | undefined;
    iterateStatement(): IterateStatementContext | undefined;
    returnStatement(): ReturnStatementContext | undefined;
    cursorStatement(): CursorStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AdministrationStatementContext extends ParserRuleContext {
    alterUser(): AlterUserContext | undefined;
    createUser(): CreateUserContext | undefined;
    dropUser(): DropUserContext | undefined;
    grantStatement(): GrantStatementContext | undefined;
    grantProxy(): GrantProxyContext | undefined;
    renameUser(): RenameUserContext | undefined;
    revokeStatement(): RevokeStatementContext | undefined;
    revokeProxy(): RevokeProxyContext | undefined;
    analyzeTable(): AnalyzeTableContext | undefined;
    checkTable(): CheckTableContext | undefined;
    checksumTable(): ChecksumTableContext | undefined;
    optimizeTable(): OptimizeTableContext | undefined;
    repairTable(): RepairTableContext | undefined;
    createUdfunction(): CreateUdfunctionContext | undefined;
    installPlugin(): InstallPluginContext | undefined;
    uninstallPlugin(): UninstallPluginContext | undefined;
    setStatement(): SetStatementContext | undefined;
    showStatement(): ShowStatementContext | undefined;
    binlogStatement(): BinlogStatementContext | undefined;
    cacheIndexStatement(): CacheIndexStatementContext | undefined;
    flushStatement(): FlushStatementContext | undefined;
    killStatement(): KillStatementContext | undefined;
    loadIndexIntoCache(): LoadIndexIntoCacheContext | undefined;
    resetStatement(): ResetStatementContext | undefined;
    shutdownStatement(): ShutdownStatementContext | undefined;
    explainStatement(): ExplainStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UtilityStatementContext extends ParserRuleContext {
    simpleDescribeStatement(): SimpleDescribeStatementContext | undefined;
    fullDescribeStatement(): FullDescribeStatementContext | undefined;
    helpStatement(): HelpStatementContext | undefined;
    useStatement(): UseStatementContext | undefined;
    signalStatement(): SignalStatementContext | undefined;
    resignalStatement(): ResignalStatementContext | undefined;
    diagnosticsStatement(): DiagnosticsStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateDatabaseContext extends ParserRuleContext {
    _dbFormat: Token;
    CREATE(): TerminalNode;
    uid(): UidContext;
    DATABASE(): TerminalNode | undefined;
    SCHEMA(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    createDatabaseOption(): CreateDatabaseOptionContext[];
    createDatabaseOption(i: number): CreateDatabaseOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateEventContext extends ParserRuleContext {
    CREATE(): TerminalNode;
    EVENT(): TerminalNode;
    fullId(): FullIdContext;
    ON(): TerminalNode[];
    ON(i: number): TerminalNode;
    SCHEDULE(): TerminalNode;
    scheduleExpression(): ScheduleExpressionContext;
    DO(): TerminalNode;
    routineBody(): RoutineBodyContext;
    ownerStatement(): OwnerStatementContext | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    COMPLETION(): TerminalNode | undefined;
    PRESERVE(): TerminalNode | undefined;
    enableType(): EnableTypeContext | undefined;
    COMMENT(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateIndexContext extends ParserRuleContext {
    _intimeAction: Token;
    _indexCategory: Token;
    _algType: Token;
    _lockType: Token;
    CREATE(): TerminalNode;
    INDEX(): TerminalNode;
    uid(): UidContext;
    ON(): TerminalNode;
    tableName(): TableNameContext;
    indexColumnNames(): IndexColumnNamesContext;
    orReplace(): OrReplaceContext | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    indexType(): IndexTypeContext | undefined;
    waitNowaitClause(): WaitNowaitClauseContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    ALGORITHM(): TerminalNode[];
    ALGORITHM(i: number): TerminalNode;
    LOCK(): TerminalNode[];
    LOCK(i: number): TerminalNode;
    ONLINE(): TerminalNode | undefined;
    OFFLINE(): TerminalNode | undefined;
    UNIQUE(): TerminalNode | undefined;
    FULLTEXT(): TerminalNode | undefined;
    SPATIAL(): TerminalNode | undefined;
    DEFAULT(): TerminalNode[];
    DEFAULT(i: number): TerminalNode;
    INPLACE(): TerminalNode[];
    INPLACE(i: number): TerminalNode;
    COPY(): TerminalNode[];
    COPY(i: number): TerminalNode;
    NOCOPY(): TerminalNode[];
    NOCOPY(i: number): TerminalNode;
    INSTANT(): TerminalNode[];
    INSTANT(i: number): TerminalNode;
    NONE(): TerminalNode[];
    NONE(i: number): TerminalNode;
    SHARED(): TerminalNode[];
    SHARED(i: number): TerminalNode;
    EXCLUSIVE(): TerminalNode[];
    EXCLUSIVE(i: number): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateLogfileGroupContext extends ParserRuleContext {
    _undoFile: Token;
    _initSize: FileSizeLiteralContext;
    _undoSize: FileSizeLiteralContext;
    _redoSize: FileSizeLiteralContext;
    _comment: Token;
    CREATE(): TerminalNode;
    LOGFILE(): TerminalNode;
    GROUP(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    ADD(): TerminalNode;
    UNDOFILE(): TerminalNode;
    ENGINE(): TerminalNode;
    engineName(): EngineNameContext;
    STRING_LITERAL(): TerminalNode[];
    STRING_LITERAL(i: number): TerminalNode;
    INITIAL_SIZE(): TerminalNode | undefined;
    UNDO_BUFFER_SIZE(): TerminalNode | undefined;
    REDO_BUFFER_SIZE(): TerminalNode | undefined;
    NODEGROUP(): TerminalNode | undefined;
    WAIT(): TerminalNode | undefined;
    COMMENT(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    fileSizeLiteral(): FileSizeLiteralContext[];
    fileSizeLiteral(i: number): FileSizeLiteralContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateProcedureContext extends ParserRuleContext {
    CREATE(): TerminalNode;
    PROCEDURE(): TerminalNode;
    fullId(): FullIdContext;
    LR_BRACKET(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    routineBody(): RoutineBodyContext;
    orReplace(): OrReplaceContext | undefined;
    ownerStatement(): OwnerStatementContext | undefined;
    procedureParameter(): ProcedureParameterContext[];
    procedureParameter(i: number): ProcedureParameterContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    routineOption(): RoutineOptionContext[];
    routineOption(i: number): RoutineOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateFunctionContext extends ParserRuleContext {
    CREATE(): TerminalNode;
    FUNCTION(): TerminalNode;
    fullId(): FullIdContext;
    LR_BRACKET(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    RETURNS(): TerminalNode;
    dataType(): DataTypeContext;
    routineBody(): RoutineBodyContext | undefined;
    returnStatement(): ReturnStatementContext | undefined;
    orReplace(): OrReplaceContext | undefined;
    ownerStatement(): OwnerStatementContext | undefined;
    AGGREGATE(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    functionParameter(): FunctionParameterContext[];
    functionParameter(i: number): FunctionParameterContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    routineOption(): RoutineOptionContext[];
    routineOption(i: number): RoutineOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateRoleContext extends ParserRuleContext {
    CREATE(): TerminalNode;
    ROLE(): TerminalNode;
    roleName(): RoleNameContext[];
    roleName(i: number): RoleNameContext;
    ifNotExists(): IfNotExistsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateServerContext extends ParserRuleContext {
    _wrapperName: Token;
    CREATE(): TerminalNode;
    SERVER(): TerminalNode;
    uid(): UidContext;
    FOREIGN(): TerminalNode;
    DATA(): TerminalNode;
    WRAPPER(): TerminalNode;
    OPTIONS(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    serverOption(): ServerOptionContext[];
    serverOption(i: number): ServerOptionContext;
    RR_BRACKET(): TerminalNode;
    MYSQL(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateTableContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CreateTableContext): void;
}
export declare class CopyCreateTableContext extends CreateTableContext {
    _parenthesisTable: TableNameContext;
    CREATE(): TerminalNode;
    TABLE(): TerminalNode;
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext;
    LIKE(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    orReplace(): OrReplaceContext | undefined;
    TEMPORARY(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    constructor(ctx: CreateTableContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class QueryCreateTableContext extends CreateTableContext {
    _keyViolate: Token;
    CREATE(): TerminalNode;
    TABLE(): TerminalNode;
    tableName(): TableNameContext;
    selectStatement(): SelectStatementContext;
    orReplace(): OrReplaceContext | undefined;
    TEMPORARY(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    createDefinitions(): CreateDefinitionsContext | undefined;
    tableOption(): TableOptionContext[];
    tableOption(i: number): TableOptionContext;
    partitionDefinitions(): PartitionDefinitionsContext | undefined;
    AS(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    REPLACE(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: CreateTableContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ColumnCreateTableContext extends CreateTableContext {
    CREATE(): TerminalNode;
    TABLE(): TerminalNode;
    tableName(): TableNameContext;
    createDefinitions(): CreateDefinitionsContext;
    orReplace(): OrReplaceContext | undefined;
    TEMPORARY(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    tableOption(): TableOptionContext[];
    tableOption(i: number): TableOptionContext;
    partitionDefinitions(): PartitionDefinitionsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: CreateTableContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateTablespaceInnodbContext extends ParserRuleContext {
    _datafile: Token;
    _fileBlockSize: FileSizeLiteralContext;
    CREATE(): TerminalNode;
    TABLESPACE(): TerminalNode;
    uid(): UidContext;
    ADD(): TerminalNode;
    DATAFILE(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    FILE_BLOCK_SIZE(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    ENGINE(): TerminalNode | undefined;
    engineName(): EngineNameContext | undefined;
    fileSizeLiteral(): FileSizeLiteralContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateTablespaceNdbContext extends ParserRuleContext {
    _datafile: Token;
    _extentSize: FileSizeLiteralContext;
    _initialSize: FileSizeLiteralContext;
    _autoextendSize: FileSizeLiteralContext;
    _maxSize: FileSizeLiteralContext;
    _comment: Token;
    CREATE(): TerminalNode;
    TABLESPACE(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    ADD(): TerminalNode;
    DATAFILE(): TerminalNode;
    USE(): TerminalNode;
    LOGFILE(): TerminalNode;
    GROUP(): TerminalNode;
    ENGINE(): TerminalNode;
    engineName(): EngineNameContext;
    STRING_LITERAL(): TerminalNode[];
    STRING_LITERAL(i: number): TerminalNode;
    EXTENT_SIZE(): TerminalNode | undefined;
    INITIAL_SIZE(): TerminalNode | undefined;
    AUTOEXTEND_SIZE(): TerminalNode | undefined;
    MAX_SIZE(): TerminalNode | undefined;
    NODEGROUP(): TerminalNode | undefined;
    WAIT(): TerminalNode | undefined;
    COMMENT(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    fileSizeLiteral(): FileSizeLiteralContext[];
    fileSizeLiteral(i: number): FileSizeLiteralContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateTriggerContext extends ParserRuleContext {
    _thisTrigger: FullIdContext;
    _triggerTime: Token;
    _triggerEvent: Token;
    _triggerPlace: Token;
    _otherTrigger: FullIdContext;
    CREATE(): TerminalNode;
    TRIGGER(): TerminalNode;
    ON(): TerminalNode;
    tableName(): TableNameContext;
    FOR(): TerminalNode;
    EACH(): TerminalNode;
    ROW(): TerminalNode;
    routineBody(): RoutineBodyContext;
    fullId(): FullIdContext[];
    fullId(i: number): FullIdContext;
    BEFORE(): TerminalNode | undefined;
    AFTER(): TerminalNode | undefined;
    INSERT(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    DELETE(): TerminalNode | undefined;
    orReplace(): OrReplaceContext | undefined;
    ownerStatement(): OwnerStatementContext | undefined;
    FOLLOWS(): TerminalNode | undefined;
    PRECEDES(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WithClauseContext extends ParserRuleContext {
    WITH(): TerminalNode;
    commonTableExpressions(): CommonTableExpressionsContext;
    RECURSIVE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CommonTableExpressionsContext extends ParserRuleContext {
    cteName(): CteNameContext;
    AS(): TerminalNode;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    dmlStatement(): DmlStatementContext;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    cteColumnName(): CteColumnNameContext[];
    cteColumnName(i: number): CteColumnNameContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    commonTableExpressions(): CommonTableExpressionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CteNameContext extends ParserRuleContext {
    uid(): UidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CteColumnNameContext extends ParserRuleContext {
    uid(): UidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateViewContext extends ParserRuleContext {
    _algType: Token;
    _secContext: Token;
    _checkOption: Token;
    CREATE(): TerminalNode;
    VIEW(): TerminalNode;
    fullId(): FullIdContext;
    AS(): TerminalNode;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    selectStatement(): SelectStatementContext | undefined;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    orReplace(): OrReplaceContext | undefined;
    ALGORITHM(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    ownerStatement(): OwnerStatementContext | undefined;
    SQL(): TerminalNode | undefined;
    SECURITY(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    UNDEFINED(): TerminalNode | undefined;
    MERGE(): TerminalNode | undefined;
    TEMPTABLE(): TerminalNode | undefined;
    DEFINER(): TerminalNode | undefined;
    INVOKER(): TerminalNode | undefined;
    withClause(): WithClauseContext | undefined;
    WITH(): TerminalNode | undefined;
    CHECK(): TerminalNode | undefined;
    OPTION(): TerminalNode | undefined;
    CASCADED(): TerminalNode | undefined;
    LOCAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateSequenceContext extends ParserRuleContext {
    CREATE(): TerminalNode;
    SEQUENCE(): TerminalNode;
    fullId(): FullIdContext;
    orReplace(): OrReplaceContext | undefined;
    TEMPORARY(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    sequenceSpec(): SequenceSpecContext[];
    sequenceSpec(i: number): SequenceSpecContext;
    tableOption(): TableOptionContext[];
    tableOption(i: number): TableOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SequenceSpecContext extends ParserRuleContext {
    INCREMENT(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    BY(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    MINVALUE(): TerminalNode | undefined;
    NO(): TerminalNode | undefined;
    NOMINVALUE(): TerminalNode | undefined;
    MAXVALUE(): TerminalNode | undefined;
    NOMAXVALUE(): TerminalNode | undefined;
    START(): TerminalNode | undefined;
    WITH(): TerminalNode | undefined;
    CACHE(): TerminalNode | undefined;
    NOCACHE(): TerminalNode | undefined;
    CYCLE(): TerminalNode | undefined;
    NOCYCLE(): TerminalNode | undefined;
    RESTART(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateDatabaseOptionContext extends ParserRuleContext {
    charSet(): CharSetContext | undefined;
    charsetName(): CharsetNameContext | undefined;
    DEFAULT(): TerminalNode[];
    DEFAULT(i: number): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    COLLATE(): TerminalNode | undefined;
    collationName(): CollationNameContext | undefined;
    ENCRYPTION(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    READ(): TerminalNode | undefined;
    ONLY(): TerminalNode | undefined;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CharSetContext extends ParserRuleContext {
    CHARACTER(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    CHARSET(): TerminalNode | undefined;
    CHAR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CurrentUserExpressionContext extends ParserRuleContext {
    CURRENT_USER(): TerminalNode;
    LR_BRACKET(): TerminalNode | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class OwnerStatementContext extends ParserRuleContext {
    DEFINER(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    userName(): UserNameContext | undefined;
    currentUserExpression(): CurrentUserExpressionContext | undefined;
    CURRENT_ROLE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ScheduleExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ScheduleExpressionContext): void;
}
export declare class PreciseScheduleContext extends ScheduleExpressionContext {
    AT(): TerminalNode;
    timestampValue(): TimestampValueContext;
    intervalExpr(): IntervalExprContext[];
    intervalExpr(i: number): IntervalExprContext;
    constructor(ctx: ScheduleExpressionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IntervalScheduleContext extends ScheduleExpressionContext {
    _startTimestamp: TimestampValueContext;
    _intervalExpr: IntervalExprContext;
    _startIntervals: IntervalExprContext[];
    _endTimestamp: TimestampValueContext;
    _endIntervals: IntervalExprContext[];
    EVERY(): TerminalNode;
    intervalType(): IntervalTypeContext;
    decimalLiteral(): DecimalLiteralContext | undefined;
    expression(): ExpressionContext | undefined;
    STARTS(): TerminalNode | undefined;
    ENDS(): TerminalNode | undefined;
    timestampValue(): TimestampValueContext[];
    timestampValue(i: number): TimestampValueContext;
    intervalExpr(): IntervalExprContext[];
    intervalExpr(i: number): IntervalExprContext;
    constructor(ctx: ScheduleExpressionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TimestampValueContext extends ParserRuleContext {
    CURRENT_TIMESTAMP(): TerminalNode | undefined;
    stringLiteral(): StringLiteralContext | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IntervalExprContext extends ParserRuleContext {
    PLUS(): TerminalNode;
    INTERVAL(): TerminalNode;
    intervalType(): IntervalTypeContext;
    decimalLiteral(): DecimalLiteralContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IntervalTypeContext extends ParserRuleContext {
    intervalTypeBase(): IntervalTypeBaseContext | undefined;
    YEAR(): TerminalNode | undefined;
    YEAR_MONTH(): TerminalNode | undefined;
    DAY_HOUR(): TerminalNode | undefined;
    DAY_MINUTE(): TerminalNode | undefined;
    DAY_SECOND(): TerminalNode | undefined;
    HOUR_MINUTE(): TerminalNode | undefined;
    HOUR_SECOND(): TerminalNode | undefined;
    MINUTE_SECOND(): TerminalNode | undefined;
    SECOND_MICROSECOND(): TerminalNode | undefined;
    MINUTE_MICROSECOND(): TerminalNode | undefined;
    HOUR_MICROSECOND(): TerminalNode | undefined;
    DAY_MICROSECOND(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class EnableTypeContext extends ParserRuleContext {
    ENABLE(): TerminalNode | undefined;
    DISABLE(): TerminalNode | undefined;
    ON(): TerminalNode | undefined;
    SLAVE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IndexTypeContext extends ParserRuleContext {
    USING(): TerminalNode;
    BTREE(): TerminalNode | undefined;
    HASH(): TerminalNode | undefined;
    RTREE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IndexOptionContext extends ParserRuleContext {
    KEY_BLOCK_SIZE(): TerminalNode | undefined;
    fileSizeLiteral(): FileSizeLiteralContext | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    indexType(): IndexTypeContext | undefined;
    WITH(): TerminalNode | undefined;
    PARSER(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    COMMENT(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    VISIBLE(): TerminalNode | undefined;
    INVISIBLE(): TerminalNode | undefined;
    ENGINE_ATTRIBUTE(): TerminalNode | undefined;
    SECONDARY_ENGINE_ATTRIBUTE(): TerminalNode | undefined;
    CLUSTERING(): TerminalNode | undefined;
    YES(): TerminalNode | undefined;
    NO(): TerminalNode | undefined;
    IGNORED(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ProcedureParameterContext extends ParserRuleContext {
    _direction: Token;
    uid(): UidContext;
    dataType(): DataTypeContext;
    IN(): TerminalNode | undefined;
    OUT(): TerminalNode | undefined;
    INOUT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FunctionParameterContext extends ParserRuleContext {
    uid(): UidContext;
    dataType(): DataTypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RoutineOptionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: RoutineOptionContext): void;
}
export declare class RoutineCommentContext extends RoutineOptionContext {
    COMMENT(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(ctx: RoutineOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RoutineLanguageContext extends RoutineOptionContext {
    LANGUAGE(): TerminalNode;
    SQL(): TerminalNode;
    constructor(ctx: RoutineOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RoutineBehaviorContext extends RoutineOptionContext {
    DETERMINISTIC(): TerminalNode;
    NOT(): TerminalNode | undefined;
    constructor(ctx: RoutineOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RoutineDataContext extends RoutineOptionContext {
    CONTAINS(): TerminalNode | undefined;
    SQL(): TerminalNode | undefined;
    NO(): TerminalNode | undefined;
    READS(): TerminalNode | undefined;
    DATA(): TerminalNode | undefined;
    MODIFIES(): TerminalNode | undefined;
    constructor(ctx: RoutineOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RoutineSecurityContext extends RoutineOptionContext {
    _context: Token;
    SQL(): TerminalNode;
    SECURITY(): TerminalNode;
    DEFINER(): TerminalNode | undefined;
    INVOKER(): TerminalNode | undefined;
    constructor(ctx: RoutineOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ServerOptionContext extends ParserRuleContext {
    HOST(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    DATABASE(): TerminalNode | undefined;
    USER(): TerminalNode | undefined;
    PASSWORD(): TerminalNode | undefined;
    SOCKET(): TerminalNode | undefined;
    OWNER(): TerminalNode | undefined;
    PORT(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateDefinitionsContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode;
    createDefinition(): CreateDefinitionContext[];
    createDefinition(i: number): CreateDefinitionContext;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateDefinitionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CreateDefinitionContext): void;
}
export declare class ColumnDeclarationContext extends CreateDefinitionContext {
    uid(): UidContext;
    columnDefinition(): ColumnDefinitionContext;
    constructor(ctx: CreateDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ConstraintDeclarationContext extends CreateDefinitionContext {
    tableConstraint(): TableConstraintContext;
    constructor(ctx: CreateDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IndexDeclarationContext extends CreateDefinitionContext {
    indexColumnDefinition(): IndexColumnDefinitionContext;
    constructor(ctx: CreateDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ColumnDefinitionContext extends ParserRuleContext {
    dataType(): DataTypeContext;
    columnConstraint(): ColumnConstraintContext[];
    columnConstraint(i: number): ColumnConstraintContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ColumnConstraintContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ColumnConstraintContext): void;
}
export declare class NullColumnConstraintContext extends ColumnConstraintContext {
    nullNotnull(): NullNotnullContext;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DefaultColumnConstraintContext extends ColumnConstraintContext {
    DEFAULT(): TerminalNode;
    defaultValue(): DefaultValueContext;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class VisibilityColumnConstraintContext extends ColumnConstraintContext {
    VISIBLE(): TerminalNode;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class InvisibilityColumnConstraintContext extends ColumnConstraintContext {
    INVISIBLE(): TerminalNode;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AutoIncrementColumnConstraintContext extends ColumnConstraintContext {
    AUTO_INCREMENT(): TerminalNode | undefined;
    ON(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    currentTimestamp(): CurrentTimestampContext | undefined;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PrimaryKeyColumnConstraintContext extends ColumnConstraintContext {
    KEY(): TerminalNode;
    PRIMARY(): TerminalNode | undefined;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UniqueKeyColumnConstraintContext extends ColumnConstraintContext {
    UNIQUE(): TerminalNode;
    KEY(): TerminalNode | undefined;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CommentColumnConstraintContext extends ColumnConstraintContext {
    COMMENT(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FormatColumnConstraintContext extends ColumnConstraintContext {
    _colformat: Token;
    COLUMN_FORMAT(): TerminalNode;
    FIXED(): TerminalNode | undefined;
    DYNAMIC(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StorageColumnConstraintContext extends ColumnConstraintContext {
    _storageval: Token;
    STORAGE(): TerminalNode;
    DISK(): TerminalNode | undefined;
    MEMORY(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ReferenceColumnConstraintContext extends ColumnConstraintContext {
    referenceDefinition(): ReferenceDefinitionContext;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CollateColumnConstraintContext extends ColumnConstraintContext {
    COLLATE(): TerminalNode;
    collationName(): CollationNameContext;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class GeneratedColumnConstraintContext extends ColumnConstraintContext {
    AS(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): TerminalNode;
    GENERATED(): TerminalNode | undefined;
    ALWAYS(): TerminalNode | undefined;
    VIRTUAL(): TerminalNode | undefined;
    STORED(): TerminalNode | undefined;
    PERSISTENT(): TerminalNode | undefined;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SerialDefaultColumnConstraintContext extends ColumnConstraintContext {
    SERIAL(): TerminalNode;
    DEFAULT(): TerminalNode;
    VALUE(): TerminalNode;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CheckColumnConstraintContext extends ColumnConstraintContext {
    _name: UidContext;
    CHECK(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): TerminalNode;
    CONSTRAINT(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    constructor(ctx: ColumnConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableConstraintContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TableConstraintContext): void;
}
export declare class PrimaryKeyTableConstraintContext extends TableConstraintContext {
    _name: UidContext;
    _index: UidContext;
    PRIMARY(): TerminalNode;
    KEY(): TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    CONSTRAINT(): TerminalNode | undefined;
    indexType(): IndexTypeContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    uid(): UidContext[];
    uid(i: number): UidContext;
    constructor(ctx: TableConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UniqueKeyTableConstraintContext extends TableConstraintContext {
    _name: UidContext;
    _indexFormat: Token;
    _index: UidContext;
    UNIQUE(): TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    CONSTRAINT(): TerminalNode | undefined;
    indexType(): IndexTypeContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    uid(): UidContext[];
    uid(i: number): UidContext;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    constructor(ctx: TableConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ForeignKeyTableConstraintContext extends TableConstraintContext {
    _name: UidContext;
    _index: UidContext;
    FOREIGN(): TerminalNode;
    KEY(): TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    referenceDefinition(): ReferenceDefinitionContext;
    CONSTRAINT(): TerminalNode | undefined;
    uid(): UidContext[];
    uid(i: number): UidContext;
    constructor(ctx: TableConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CheckTableConstraintContext extends TableConstraintContext {
    _name: UidContext;
    CHECK(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): TerminalNode;
    CONSTRAINT(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    constructor(ctx: TableConstraintContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ReferenceDefinitionContext extends ParserRuleContext {
    _matchType: Token;
    REFERENCES(): TerminalNode;
    tableName(): TableNameContext;
    indexColumnNames(): IndexColumnNamesContext | undefined;
    MATCH(): TerminalNode | undefined;
    referenceAction(): ReferenceActionContext | undefined;
    FULL(): TerminalNode | undefined;
    PARTIAL(): TerminalNode | undefined;
    SIMPLE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ReferenceActionContext extends ParserRuleContext {
    _onDelete: ReferenceControlTypeContext;
    _onUpdate: ReferenceControlTypeContext;
    ON(): TerminalNode[];
    ON(i: number): TerminalNode;
    DELETE(): TerminalNode | undefined;
    referenceControlType(): ReferenceControlTypeContext[];
    referenceControlType(i: number): ReferenceControlTypeContext;
    UPDATE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ReferenceControlTypeContext extends ParserRuleContext {
    RESTRICT(): TerminalNode | undefined;
    CASCADE(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    NULL_LITERAL(): TerminalNode | undefined;
    NO(): TerminalNode | undefined;
    ACTION(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IndexColumnDefinitionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: IndexColumnDefinitionContext): void;
}
export declare class SimpleIndexDeclarationContext extends IndexColumnDefinitionContext {
    _indexFormat: Token;
    indexColumnNames(): IndexColumnNamesContext;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    indexType(): IndexTypeContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    constructor(ctx: IndexColumnDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SpecialIndexDeclarationContext extends IndexColumnDefinitionContext {
    _indexFormat: Token;
    indexColumnNames(): IndexColumnNamesContext;
    FULLTEXT(): TerminalNode | undefined;
    SPATIAL(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    constructor(ctx: IndexColumnDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TableOptionContext): void;
}
export declare class TableOptionEngineContext extends TableOptionContext {
    ENGINE(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    engineName(): EngineNameContext | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionEngineAttributeContext extends TableOptionContext {
    ENGINE_ATTRIBUTE(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionAutoextendSizeContext extends TableOptionContext {
    AUTOEXTEND_SIZE(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionAutoIncrementContext extends TableOptionContext {
    AUTO_INCREMENT(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionAverageContext extends TableOptionContext {
    AVG_ROW_LENGTH(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionCharsetContext extends TableOptionContext {
    charSet(): CharSetContext;
    charsetName(): CharsetNameContext | undefined;
    DEFAULT(): TerminalNode[];
    DEFAULT(i: number): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionChecksumContext extends TableOptionContext {
    _boolValue: Token;
    CHECKSUM(): TerminalNode | undefined;
    PAGE_CHECKSUM(): TerminalNode | undefined;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionCollateContext extends TableOptionContext {
    COLLATE(): TerminalNode;
    collationName(): CollationNameContext;
    DEFAULT(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionCommentContext extends TableOptionContext {
    COMMENT(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionCompressionContext extends TableOptionContext {
    COMPRESSION(): TerminalNode;
    STRING_LITERAL(): TerminalNode | undefined;
    ID(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionConnectionContext extends TableOptionContext {
    CONNECTION(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionDataDirectoryContext extends TableOptionContext {
    DIRECTORY(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    DATA(): TerminalNode | undefined;
    INDEX(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionDelayContext extends TableOptionContext {
    _boolValue: Token;
    DELAY_KEY_WRITE(): TerminalNode;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionEncryptionContext extends TableOptionContext {
    ENCRYPTION(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionEncryptedContext extends TableOptionContext {
    encryptedLiteral(): EncryptedLiteralContext;
    YES(): TerminalNode | undefined;
    NO(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionPageCompressedContext extends TableOptionContext {
    PAGE_COMPRESSED(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionPageCompressionLevelContext extends TableOptionContext {
    decimalLiteral(): DecimalLiteralContext;
    PAGE_COMPRESSION_LEVEL(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionEncryptionKeyIdContext extends TableOptionContext {
    ENCRYPTION_KEY_ID(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionIndexDirectoryContext extends TableOptionContext {
    INDEX(): TerminalNode;
    DIRECTORY(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionInsertMethodContext extends TableOptionContext {
    _insertMethod: Token;
    INSERT_METHOD(): TerminalNode;
    NO(): TerminalNode | undefined;
    FIRST(): TerminalNode | undefined;
    LAST(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionKeyBlockSizeContext extends TableOptionContext {
    KEY_BLOCK_SIZE(): TerminalNode;
    fileSizeLiteral(): FileSizeLiteralContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionMaxRowsContext extends TableOptionContext {
    MAX_ROWS(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionMinRowsContext extends TableOptionContext {
    MIN_ROWS(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionPackKeysContext extends TableOptionContext {
    _extBoolValue: Token;
    PACK_KEYS(): TerminalNode;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionPasswordContext extends TableOptionContext {
    PASSWORD(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionRowFormatContext extends TableOptionContext {
    _rowFormat: Token;
    ROW_FORMAT(): TerminalNode;
    DEFAULT(): TerminalNode | undefined;
    DYNAMIC(): TerminalNode | undefined;
    FIXED(): TerminalNode | undefined;
    COMPRESSED(): TerminalNode | undefined;
    REDUNDANT(): TerminalNode | undefined;
    COMPACT(): TerminalNode | undefined;
    ID(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionStartTransactionContext extends TableOptionContext {
    START(): TerminalNode;
    TRANSACTION(): TerminalNode;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionSecondaryEngineAttributeContext extends TableOptionContext {
    SECONDARY_ENGINE_ATTRIBUTE(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionRecalculationContext extends TableOptionContext {
    _extBoolValue: Token;
    STATS_AUTO_RECALC(): TerminalNode;
    DEFAULT(): TerminalNode | undefined;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionPersistentContext extends TableOptionContext {
    _extBoolValue: Token;
    STATS_PERSISTENT(): TerminalNode;
    DEFAULT(): TerminalNode | undefined;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionSamplePageContext extends TableOptionContext {
    STATS_SAMPLE_PAGES(): TerminalNode;
    DEFAULT(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionTablespaceContext extends TableOptionContext {
    TABLESPACE(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    tablespaceStorage(): TablespaceStorageContext | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionTableTypeContext extends TableOptionContext {
    TABLE_TYPE(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    tableType(): TableTypeContext;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionTransactionalContext extends TableOptionContext {
    TRANSACTIONAL(): TerminalNode;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableOptionUnionContext extends TableOptionContext {
    UNION(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    tables(): TablesContext;
    RR_BRACKET(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: TableOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableTypeContext extends ParserRuleContext {
    MYSQL(): TerminalNode | undefined;
    ODBC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TablespaceStorageContext extends ParserRuleContext {
    STORAGE(): TerminalNode;
    DISK(): TerminalNode | undefined;
    MEMORY(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionDefinitionsContext extends ParserRuleContext {
    _count: DecimalLiteralContext;
    _subCount: DecimalLiteralContext;
    PARTITION(): TerminalNode;
    BY(): TerminalNode[];
    BY(i: number): TerminalNode;
    partitionFunctionDefinition(): PartitionFunctionDefinitionContext;
    PARTITIONS(): TerminalNode | undefined;
    SUBPARTITION(): TerminalNode | undefined;
    subpartitionFunctionDefinition(): SubpartitionFunctionDefinitionContext | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    partitionDefinition(): PartitionDefinitionContext[];
    partitionDefinition(i: number): PartitionDefinitionContext;
    RR_BRACKET(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext;
    SUBPARTITIONS(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionFunctionDefinitionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PartitionFunctionDefinitionContext): void;
}
export declare class PartitionFunctionHashContext extends PartitionFunctionDefinitionContext {
    HASH(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): TerminalNode;
    LINEAR(): TerminalNode | undefined;
    constructor(ctx: PartitionFunctionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionFunctionKeyContext extends PartitionFunctionDefinitionContext {
    _algType: Token;
    KEY(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    uidList(): UidListContext;
    RR_BRACKET(): TerminalNode;
    LINEAR(): TerminalNode | undefined;
    ALGORITHM(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    TWO_DECIMAL(): TerminalNode | undefined;
    constructor(ctx: PartitionFunctionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionFunctionRangeContext extends PartitionFunctionDefinitionContext {
    RANGE(): TerminalNode;
    LR_BRACKET(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    COLUMNS(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    constructor(ctx: PartitionFunctionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionFunctionListContext extends PartitionFunctionDefinitionContext {
    LIST(): TerminalNode;
    LR_BRACKET(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    COLUMNS(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    constructor(ctx: PartitionFunctionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SubpartitionFunctionDefinitionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SubpartitionFunctionDefinitionContext): void;
}
export declare class SubPartitionFunctionHashContext extends SubpartitionFunctionDefinitionContext {
    HASH(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): TerminalNode;
    LINEAR(): TerminalNode | undefined;
    constructor(ctx: SubpartitionFunctionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SubPartitionFunctionKeyContext extends SubpartitionFunctionDefinitionContext {
    _algType: Token;
    KEY(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    uidList(): UidListContext;
    RR_BRACKET(): TerminalNode;
    LINEAR(): TerminalNode | undefined;
    ALGORITHM(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    TWO_DECIMAL(): TerminalNode | undefined;
    constructor(ctx: SubpartitionFunctionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionDefinitionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PartitionDefinitionContext): void;
}
export declare class PartitionComparisonContext extends PartitionDefinitionContext {
    PARTITION(): TerminalNode;
    uid(): UidContext;
    VALUES(): TerminalNode;
    LESS(): TerminalNode;
    THAN(): TerminalNode;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    partitionDefinerAtom(): PartitionDefinerAtomContext[];
    partitionDefinerAtom(i: number): PartitionDefinerAtomContext;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext;
    subpartitionDefinition(): SubpartitionDefinitionContext[];
    subpartitionDefinition(i: number): SubpartitionDefinitionContext;
    constructor(ctx: PartitionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionListAtomContext extends PartitionDefinitionContext {
    PARTITION(): TerminalNode;
    uid(): UidContext;
    VALUES(): TerminalNode;
    IN(): TerminalNode;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    partitionDefinerAtom(): PartitionDefinerAtomContext[];
    partitionDefinerAtom(i: number): PartitionDefinerAtomContext;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext;
    subpartitionDefinition(): SubpartitionDefinitionContext[];
    subpartitionDefinition(i: number): SubpartitionDefinitionContext;
    constructor(ctx: PartitionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionListVectorContext extends PartitionDefinitionContext {
    PARTITION(): TerminalNode;
    uid(): UidContext;
    VALUES(): TerminalNode;
    IN(): TerminalNode;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    partitionDefinerVector(): PartitionDefinerVectorContext[];
    partitionDefinerVector(i: number): PartitionDefinerVectorContext;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext;
    subpartitionDefinition(): SubpartitionDefinitionContext[];
    subpartitionDefinition(i: number): SubpartitionDefinitionContext;
    constructor(ctx: PartitionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionSimpleContext extends PartitionDefinitionContext {
    PARTITION(): TerminalNode;
    uid(): UidContext;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext;
    LR_BRACKET(): TerminalNode | undefined;
    subpartitionDefinition(): SubpartitionDefinitionContext[];
    subpartitionDefinition(i: number): SubpartitionDefinitionContext;
    RR_BRACKET(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: PartitionDefinitionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionDefinerAtomContext extends ParserRuleContext {
    constant(): ConstantContext | undefined;
    expression(): ExpressionContext | undefined;
    MAXVALUE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionDefinerVectorContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode;
    partitionDefinerAtom(): PartitionDefinerAtomContext[];
    partitionDefinerAtom(i: number): PartitionDefinerAtomContext;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SubpartitionDefinitionContext extends ParserRuleContext {
    SUBPARTITION(): TerminalNode;
    uid(): UidContext;
    partitionOption(): PartitionOptionContext[];
    partitionOption(i: number): PartitionOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionOptionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PartitionOptionContext): void;
}
export declare class PartitionOptionEngineContext extends PartitionOptionContext {
    ENGINE(): TerminalNode;
    engineName(): EngineNameContext;
    DEFAULT(): TerminalNode | undefined;
    STORAGE(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PartitionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionOptionCommentContext extends PartitionOptionContext {
    _comment: Token;
    COMMENT(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PartitionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionOptionDataDirectoryContext extends PartitionOptionContext {
    _dataDirectory: Token;
    DATA(): TerminalNode;
    DIRECTORY(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PartitionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionOptionIndexDirectoryContext extends PartitionOptionContext {
    _indexDirectory: Token;
    INDEX(): TerminalNode;
    DIRECTORY(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PartitionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionOptionMaxRowsContext extends PartitionOptionContext {
    _maxRows: DecimalLiteralContext;
    MAX_ROWS(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PartitionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionOptionMinRowsContext extends PartitionOptionContext {
    _minRows: DecimalLiteralContext;
    MIN_ROWS(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PartitionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionOptionTablespaceContext extends PartitionOptionContext {
    _tablespace: UidContext;
    TABLESPACE(): TerminalNode;
    uid(): UidContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PartitionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionOptionNodeGroupContext extends PartitionOptionContext {
    _nodegroup: UidContext;
    NODEGROUP(): TerminalNode;
    uid(): UidContext;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: PartitionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterDatabaseContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AlterDatabaseContext): void;
}
export declare class AlterSimpleDatabaseContext extends AlterDatabaseContext {
    _dbFormat: Token;
    ALTER(): TerminalNode;
    DATABASE(): TerminalNode | undefined;
    SCHEMA(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    createDatabaseOption(): CreateDatabaseOptionContext[];
    createDatabaseOption(i: number): CreateDatabaseOptionContext;
    constructor(ctx: AlterDatabaseContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterUpgradeNameContext extends AlterDatabaseContext {
    _dbFormat: Token;
    ALTER(): TerminalNode;
    uid(): UidContext;
    UPGRADE(): TerminalNode;
    DATA(): TerminalNode;
    DIRECTORY(): TerminalNode;
    NAME(): TerminalNode;
    DATABASE(): TerminalNode | undefined;
    SCHEMA(): TerminalNode | undefined;
    constructor(ctx: AlterDatabaseContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterEventContext extends ParserRuleContext {
    ALTER(): TerminalNode;
    EVENT(): TerminalNode;
    fullId(): FullIdContext[];
    fullId(i: number): FullIdContext;
    ownerStatement(): OwnerStatementContext | undefined;
    ON(): TerminalNode[];
    ON(i: number): TerminalNode;
    SCHEDULE(): TerminalNode | undefined;
    scheduleExpression(): ScheduleExpressionContext | undefined;
    COMPLETION(): TerminalNode | undefined;
    PRESERVE(): TerminalNode | undefined;
    RENAME(): TerminalNode | undefined;
    TO(): TerminalNode | undefined;
    enableType(): EnableTypeContext | undefined;
    COMMENT(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    DO(): TerminalNode | undefined;
    routineBody(): RoutineBodyContext | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterFunctionContext extends ParserRuleContext {
    ALTER(): TerminalNode;
    FUNCTION(): TerminalNode;
    fullId(): FullIdContext;
    routineOption(): RoutineOptionContext[];
    routineOption(i: number): RoutineOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterInstanceContext extends ParserRuleContext {
    ALTER(): TerminalNode;
    INSTANCE(): TerminalNode;
    ROTATE(): TerminalNode;
    INNODB(): TerminalNode;
    MASTER(): TerminalNode;
    KEY(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterLogfileGroupContext extends ParserRuleContext {
    ALTER(): TerminalNode;
    LOGFILE(): TerminalNode;
    GROUP(): TerminalNode;
    uid(): UidContext;
    ADD(): TerminalNode;
    UNDOFILE(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    ENGINE(): TerminalNode;
    engineName(): EngineNameContext;
    INITIAL_SIZE(): TerminalNode | undefined;
    fileSizeLiteral(): FileSizeLiteralContext | undefined;
    WAIT(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterProcedureContext extends ParserRuleContext {
    ALTER(): TerminalNode;
    PROCEDURE(): TerminalNode;
    fullId(): FullIdContext;
    routineOption(): RoutineOptionContext[];
    routineOption(i: number): RoutineOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterServerContext extends ParserRuleContext {
    ALTER(): TerminalNode;
    SERVER(): TerminalNode;
    uid(): UidContext;
    OPTIONS(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    serverOption(): ServerOptionContext[];
    serverOption(i: number): ServerOptionContext;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterTableContext extends ParserRuleContext {
    _intimeAction: Token;
    ALTER(): TerminalNode;
    TABLE(): TerminalNode;
    tableName(): TableNameContext;
    IGNORE(): TerminalNode | undefined;
    waitNowaitClause(): WaitNowaitClauseContext | undefined;
    alterSpecification(): AlterSpecificationContext[];
    alterSpecification(i: number): AlterSpecificationContext;
    partitionDefinitions(): PartitionDefinitionsContext | undefined;
    ONLINE(): TerminalNode | undefined;
    OFFLINE(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterTablespaceContext extends ParserRuleContext {
    _objectAction: Token;
    ALTER(): TerminalNode;
    TABLESPACE(): TerminalNode;
    uid(): UidContext;
    DATAFILE(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    ENGINE(): TerminalNode;
    engineName(): EngineNameContext;
    ADD(): TerminalNode | undefined;
    DROP(): TerminalNode | undefined;
    INITIAL_SIZE(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    fileSizeLiteral(): FileSizeLiteralContext | undefined;
    WAIT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterViewContext extends ParserRuleContext {
    _algType: Token;
    _secContext: Token;
    _checkOpt: Token;
    ALTER(): TerminalNode;
    VIEW(): TerminalNode;
    fullId(): FullIdContext;
    AS(): TerminalNode;
    selectStatement(): SelectStatementContext;
    ALGORITHM(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    ownerStatement(): OwnerStatementContext | undefined;
    SQL(): TerminalNode | undefined;
    SECURITY(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    WITH(): TerminalNode | undefined;
    CHECK(): TerminalNode | undefined;
    OPTION(): TerminalNode | undefined;
    UNDEFINED(): TerminalNode | undefined;
    MERGE(): TerminalNode | undefined;
    TEMPTABLE(): TerminalNode | undefined;
    DEFINER(): TerminalNode | undefined;
    INVOKER(): TerminalNode | undefined;
    CASCADED(): TerminalNode | undefined;
    LOCAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterSequenceContext extends ParserRuleContext {
    ALTER(): TerminalNode;
    SEQUENCE(): TerminalNode;
    fullId(): FullIdContext;
    ifExists(): IfExistsContext | undefined;
    sequenceSpec(): SequenceSpecContext[];
    sequenceSpec(i: number): SequenceSpecContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterSpecificationContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AlterSpecificationContext): void;
}
export declare class AlterByTableOptionContext extends AlterSpecificationContext {
    tableOption(): TableOptionContext[];
    tableOption(i: number): TableOptionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAddColumnContext extends AlterSpecificationContext {
    ADD(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    columnDefinition(): ColumnDefinitionContext;
    COLUMN(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    FIRST(): TerminalNode | undefined;
    AFTER(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAddColumnsContext extends AlterSpecificationContext {
    ADD(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    columnDefinition(): ColumnDefinitionContext[];
    columnDefinition(i: number): ColumnDefinitionContext;
    RR_BRACKET(): TerminalNode;
    COLUMN(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAddIndexContext extends AlterSpecificationContext {
    _indexFormat: Token;
    ADD(): TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    uid(): UidContext | undefined;
    indexType(): IndexTypeContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAddPrimaryKeyContext extends AlterSpecificationContext {
    _name: UidContext;
    _index: UidContext;
    ADD(): TerminalNode;
    PRIMARY(): TerminalNode;
    KEY(): TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    CONSTRAINT(): TerminalNode | undefined;
    indexType(): IndexTypeContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    uid(): UidContext[];
    uid(i: number): UidContext;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAddUniqueKeyContext extends AlterSpecificationContext {
    _name: UidContext;
    _indexFormat: Token;
    _indexName: UidContext;
    ADD(): TerminalNode;
    UNIQUE(): TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    CONSTRAINT(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    indexType(): IndexTypeContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    uid(): UidContext[];
    uid(i: number): UidContext;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAddSpecialIndexContext extends AlterSpecificationContext {
    _keyType: Token;
    _indexFormat: Token;
    ADD(): TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    FULLTEXT(): TerminalNode | undefined;
    SPATIAL(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    indexOption(): IndexOptionContext[];
    indexOption(i: number): IndexOptionContext;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAddForeignKeyContext extends AlterSpecificationContext {
    _name: UidContext;
    _indexName: UidContext;
    ADD(): TerminalNode;
    FOREIGN(): TerminalNode;
    KEY(): TerminalNode;
    indexColumnNames(): IndexColumnNamesContext;
    referenceDefinition(): ReferenceDefinitionContext;
    CONSTRAINT(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    uid(): UidContext[];
    uid(i: number): UidContext;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAddCheckTableConstraintContext extends AlterSpecificationContext {
    _name: UidContext;
    ADD(): TerminalNode;
    CHECK(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext;
    RR_BRACKET(): TerminalNode;
    CONSTRAINT(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterBySetAlgorithmContext extends AlterSpecificationContext {
    _algType: Token;
    ALGORITHM(): TerminalNode;
    DEFAULT(): TerminalNode | undefined;
    INSTANT(): TerminalNode | undefined;
    INPLACE(): TerminalNode | undefined;
    COPY(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByChangeDefaultContext extends AlterSpecificationContext {
    ALTER(): TerminalNode;
    uid(): UidContext;
    SET(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    defaultValue(): DefaultValueContext | undefined;
    DROP(): TerminalNode | undefined;
    COLUMN(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByChangeColumnContext extends AlterSpecificationContext {
    _oldColumn: UidContext;
    _newColumn: UidContext;
    _afterColumn: UidContext;
    CHANGE(): TerminalNode;
    columnDefinition(): ColumnDefinitionContext;
    uid(): UidContext[];
    uid(i: number): UidContext;
    COLUMN(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    FIRST(): TerminalNode | undefined;
    AFTER(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByRenameColumnContext extends AlterSpecificationContext {
    _oldColumn: UidContext;
    _newColumn: UidContext;
    RENAME(): TerminalNode;
    COLUMN(): TerminalNode;
    TO(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByLockContext extends AlterSpecificationContext {
    _lockType: Token;
    LOCK(): TerminalNode;
    DEFAULT(): TerminalNode | undefined;
    NONE(): TerminalNode | undefined;
    SHARED(): TerminalNode | undefined;
    EXCLUSIVE(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByModifyColumnContext extends AlterSpecificationContext {
    MODIFY(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    columnDefinition(): ColumnDefinitionContext;
    COLUMN(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    FIRST(): TerminalNode | undefined;
    AFTER(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDropColumnContext extends AlterSpecificationContext {
    DROP(): TerminalNode;
    uid(): UidContext;
    COLUMN(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    RESTRICT(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDropConstraintCheckContext extends AlterSpecificationContext {
    DROP(): TerminalNode;
    uid(): UidContext;
    CONSTRAINT(): TerminalNode | undefined;
    CHECK(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDropPrimaryKeyContext extends AlterSpecificationContext {
    DROP(): TerminalNode;
    PRIMARY(): TerminalNode;
    KEY(): TerminalNode;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDropIndexContext extends AlterSpecificationContext {
    _indexFormat: Token;
    DROP(): TerminalNode;
    uid(): UidContext;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByRenameIndexContext extends AlterSpecificationContext {
    _indexFormat: Token;
    RENAME(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    TO(): TerminalNode;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAlterIndexVisibilityContext extends AlterSpecificationContext {
    ALTER(): TerminalNode;
    INDEX(): TerminalNode;
    uid(): UidContext;
    VISIBLE(): TerminalNode | undefined;
    INVISIBLE(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDropForeignKeyContext extends AlterSpecificationContext {
    DROP(): TerminalNode;
    FOREIGN(): TerminalNode;
    KEY(): TerminalNode;
    uid(): UidContext;
    ifExists(): IfExistsContext | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDisableKeysContext extends AlterSpecificationContext {
    DISABLE(): TerminalNode;
    KEYS(): TerminalNode;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByEnableKeysContext extends AlterSpecificationContext {
    ENABLE(): TerminalNode;
    KEYS(): TerminalNode;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByRenameContext extends AlterSpecificationContext {
    _renameFormat: Token;
    RENAME(): TerminalNode;
    uid(): UidContext | undefined;
    fullId(): FullIdContext | undefined;
    TO(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByOrderContext extends AlterSpecificationContext {
    ORDER(): TerminalNode;
    BY(): TerminalNode;
    uidList(): UidListContext;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByConvertCharsetContext extends AlterSpecificationContext {
    CONVERT(): TerminalNode;
    TO(): TerminalNode;
    CHARACTER(): TerminalNode;
    SET(): TerminalNode;
    charsetName(): CharsetNameContext;
    COLLATE(): TerminalNode | undefined;
    collationName(): CollationNameContext | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDefaultCharsetContext extends AlterSpecificationContext {
    CHARACTER(): TerminalNode;
    SET(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    charsetName(): CharsetNameContext;
    DEFAULT(): TerminalNode | undefined;
    COLLATE(): TerminalNode | undefined;
    collationName(): CollationNameContext | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDiscardTablespaceContext extends AlterSpecificationContext {
    DISCARD(): TerminalNode;
    TABLESPACE(): TerminalNode;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByImportTablespaceContext extends AlterSpecificationContext {
    IMPORT(): TerminalNode;
    TABLESPACE(): TerminalNode;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByForceContext extends AlterSpecificationContext {
    FORCE(): TerminalNode;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByValidateContext extends AlterSpecificationContext {
    _validationFormat: Token;
    VALIDATION(): TerminalNode;
    WITHOUT(): TerminalNode | undefined;
    WITH(): TerminalNode | undefined;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAddDefinitionsContext extends AlterSpecificationContext {
    ADD(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    createDefinition(): CreateDefinitionContext[];
    createDefinition(i: number): CreateDefinitionContext;
    RR_BRACKET(): TerminalNode;
    COLUMN(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterPartitionContext extends AlterSpecificationContext {
    alterPartitionSpecification(): AlterPartitionSpecificationContext;
    constructor(ctx: AlterSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterPartitionSpecificationContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AlterPartitionSpecificationContext): void;
}
export declare class AlterByAddPartitionContext extends AlterPartitionSpecificationContext {
    ADD(): TerminalNode;
    PARTITION(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    partitionDefinition(): PartitionDefinitionContext[];
    partitionDefinition(i: number): PartitionDefinitionContext;
    RR_BRACKET(): TerminalNode;
    ifNotExists(): IfNotExistsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDropPartitionContext extends AlterPartitionSpecificationContext {
    DROP(): TerminalNode;
    PARTITION(): TerminalNode;
    uidList(): UidListContext;
    ifExists(): IfExistsContext | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByDiscardPartitionContext extends AlterPartitionSpecificationContext {
    DISCARD(): TerminalNode;
    PARTITION(): TerminalNode;
    TABLESPACE(): TerminalNode;
    uidList(): UidListContext | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByImportPartitionContext extends AlterPartitionSpecificationContext {
    IMPORT(): TerminalNode;
    PARTITION(): TerminalNode;
    TABLESPACE(): TerminalNode;
    uidList(): UidListContext | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByTruncatePartitionContext extends AlterPartitionSpecificationContext {
    TRUNCATE(): TerminalNode;
    PARTITION(): TerminalNode;
    uidList(): UidListContext | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByCoalescePartitionContext extends AlterPartitionSpecificationContext {
    COALESCE(): TerminalNode;
    PARTITION(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByReorganizePartitionContext extends AlterPartitionSpecificationContext {
    REORGANIZE(): TerminalNode;
    PARTITION(): TerminalNode;
    uidList(): UidListContext;
    INTO(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    partitionDefinition(): PartitionDefinitionContext[];
    partitionDefinition(i: number): PartitionDefinitionContext;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByExchangePartitionContext extends AlterPartitionSpecificationContext {
    _validationFormat: Token;
    EXCHANGE(): TerminalNode;
    PARTITION(): TerminalNode;
    uid(): UidContext;
    WITH(): TerminalNode[];
    WITH(i: number): TerminalNode;
    TABLE(): TerminalNode;
    tableName(): TableNameContext;
    VALIDATION(): TerminalNode | undefined;
    WITHOUT(): TerminalNode | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByAnalyzePartitionContext extends AlterPartitionSpecificationContext {
    ANALYZE(): TerminalNode;
    PARTITION(): TerminalNode;
    uidList(): UidListContext | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByCheckPartitionContext extends AlterPartitionSpecificationContext {
    CHECK(): TerminalNode;
    PARTITION(): TerminalNode;
    uidList(): UidListContext | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByOptimizePartitionContext extends AlterPartitionSpecificationContext {
    OPTIMIZE(): TerminalNode;
    PARTITION(): TerminalNode;
    uidList(): UidListContext | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByRebuildPartitionContext extends AlterPartitionSpecificationContext {
    REBUILD(): TerminalNode;
    PARTITION(): TerminalNode;
    uidList(): UidListContext | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByRepairPartitionContext extends AlterPartitionSpecificationContext {
    REPAIR(): TerminalNode;
    PARTITION(): TerminalNode;
    uidList(): UidListContext | undefined;
    ALL(): TerminalNode | undefined;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByRemovePartitioningContext extends AlterPartitionSpecificationContext {
    REMOVE(): TerminalNode;
    PARTITIONING(): TerminalNode;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterByUpgradePartitioningContext extends AlterPartitionSpecificationContext {
    UPGRADE(): TerminalNode;
    PARTITIONING(): TerminalNode;
    constructor(ctx: AlterPartitionSpecificationContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropDatabaseContext extends ParserRuleContext {
    _dbFormat: Token;
    DROP(): TerminalNode;
    uid(): UidContext;
    DATABASE(): TerminalNode | undefined;
    SCHEMA(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropEventContext extends ParserRuleContext {
    DROP(): TerminalNode;
    EVENT(): TerminalNode;
    fullId(): FullIdContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropIndexContext extends ParserRuleContext {
    _intimeAction: Token;
    _algType: Token;
    _lockType: Token;
    DROP(): TerminalNode;
    INDEX(): TerminalNode;
    uid(): UidContext;
    ON(): TerminalNode;
    tableName(): TableNameContext;
    ifExists(): IfExistsContext | undefined;
    ALGORITHM(): TerminalNode[];
    ALGORITHM(i: number): TerminalNode;
    LOCK(): TerminalNode[];
    LOCK(i: number): TerminalNode;
    waitNowaitClause(): WaitNowaitClauseContext | undefined;
    ONLINE(): TerminalNode | undefined;
    OFFLINE(): TerminalNode | undefined;
    DEFAULT(): TerminalNode[];
    DEFAULT(i: number): TerminalNode;
    INPLACE(): TerminalNode[];
    INPLACE(i: number): TerminalNode;
    COPY(): TerminalNode[];
    COPY(i: number): TerminalNode;
    NONE(): TerminalNode[];
    NONE(i: number): TerminalNode;
    SHARED(): TerminalNode[];
    SHARED(i: number): TerminalNode;
    EXCLUSIVE(): TerminalNode[];
    EXCLUSIVE(i: number): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropLogfileGroupContext extends ParserRuleContext {
    DROP(): TerminalNode;
    LOGFILE(): TerminalNode;
    GROUP(): TerminalNode;
    uid(): UidContext;
    ENGINE(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    engineName(): EngineNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropProcedureContext extends ParserRuleContext {
    DROP(): TerminalNode;
    PROCEDURE(): TerminalNode;
    fullId(): FullIdContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropFunctionContext extends ParserRuleContext {
    DROP(): TerminalNode;
    FUNCTION(): TerminalNode;
    fullId(): FullIdContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropServerContext extends ParserRuleContext {
    DROP(): TerminalNode;
    SERVER(): TerminalNode;
    uid(): UidContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropTableContext extends ParserRuleContext {
    _dropType: Token;
    DROP(): TerminalNode;
    TABLE(): TerminalNode;
    tables(): TablesContext;
    TEMPORARY(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    waitNowaitClause(): WaitNowaitClauseContext | undefined;
    RESTRICT(): TerminalNode | undefined;
    CASCADE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropTablespaceContext extends ParserRuleContext {
    DROP(): TerminalNode;
    TABLESPACE(): TerminalNode;
    uid(): UidContext;
    ENGINE(): TerminalNode | undefined;
    engineName(): EngineNameContext | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropTriggerContext extends ParserRuleContext {
    DROP(): TerminalNode;
    TRIGGER(): TerminalNode;
    fullId(): FullIdContext;
    ifExists(): IfExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropViewContext extends ParserRuleContext {
    _dropType: Token;
    DROP(): TerminalNode;
    VIEW(): TerminalNode;
    fullId(): FullIdContext[];
    fullId(i: number): FullIdContext;
    ifExists(): IfExistsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    RESTRICT(): TerminalNode | undefined;
    CASCADE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropRoleContext extends ParserRuleContext {
    DROP(): TerminalNode;
    ROLE(): TerminalNode;
    roleName(): RoleNameContext[];
    roleName(i: number): RoleNameContext;
    ifExists(): IfExistsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetRoleContext extends ParserRuleContext {
    SET(): TerminalNode;
    DEFAULT(): TerminalNode | undefined;
    ROLE(): TerminalNode;
    TO(): TerminalNode | undefined;
    NONE(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    roleName(): RoleNameContext[];
    roleName(i: number): RoleNameContext;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    uid(): UidContext[];
    uid(i: number): UidContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    roleOption(): RoleOptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropSequenceContext extends ParserRuleContext {
    DROP(): TerminalNode;
    SEQUENCE(): TerminalNode;
    fullId(): FullIdContext[];
    fullId(i: number): FullIdContext;
    TEMPORARY(): TerminalNode | undefined;
    ifExists(): IfExistsContext | undefined;
    COMMENT_INPUT(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RenameTableContext extends ParserRuleContext {
    RENAME(): TerminalNode;
    TABLE(): TerminalNode;
    renameTableClause(): RenameTableClauseContext[];
    renameTableClause(i: number): RenameTableClauseContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RenameTableClauseContext extends ParserRuleContext {
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext;
    TO(): TerminalNode;
    waitNowaitClause(): WaitNowaitClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TruncateTableContext extends ParserRuleContext {
    TRUNCATE(): TerminalNode;
    tableName(): TableNameContext;
    TABLE(): TerminalNode | undefined;
    waitNowaitClause(): WaitNowaitClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CallStatementContext extends ParserRuleContext {
    CALL(): TerminalNode;
    fullId(): FullIdContext;
    LR_BRACKET(): TerminalNode | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    constants(): ConstantsContext | undefined;
    expressions(): ExpressionsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DeleteStatementContext extends ParserRuleContext {
    singleDeleteStatement(): SingleDeleteStatementContext | undefined;
    multipleDeleteStatement(): MultipleDeleteStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DoStatementContext extends ParserRuleContext {
    DO(): TerminalNode;
    expressions(): ExpressionsContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerStatementContext extends ParserRuleContext {
    handlerOpenStatement(): HandlerOpenStatementContext | undefined;
    handlerReadIndexStatement(): HandlerReadIndexStatementContext | undefined;
    handlerReadStatement(): HandlerReadStatementContext | undefined;
    handlerCloseStatement(): HandlerCloseStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class InsertStatementContext extends ParserRuleContext {
    _priority: Token;
    _partitions: UidListContext;
    _columns: UidListContext;
    _setFirst: UpdatedElementContext;
    _updatedElement: UpdatedElementContext;
    _setElements: UpdatedElementContext[];
    _duplicatedFirst: UpdatedElementContext;
    _duplicatedElements: UpdatedElementContext[];
    INSERT(): TerminalNode;
    tableName(): TableNameContext;
    insertStatementValue(): InsertStatementValueContext | undefined;
    SET(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    INTO(): TerminalNode | undefined;
    PARTITION(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext;
    ON(): TerminalNode | undefined;
    DUPLICATE(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    LOW_PRIORITY(): TerminalNode | undefined;
    DELAYED(): TerminalNode | undefined;
    HIGH_PRIORITY(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    uidList(): UidListContext[];
    uidList(i: number): UidListContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LoadDataStatementContext extends ParserRuleContext {
    _priority: Token;
    _filename: Token;
    _violation: Token;
    _charset: CharsetNameContext;
    _fieldsFormat: Token;
    _linesFormat: Token;
    LOAD(): TerminalNode;
    DATA(): TerminalNode;
    INFILE(): TerminalNode;
    INTO(): TerminalNode;
    TABLE(): TerminalNode;
    tableName(): TableNameContext;
    STRING_LITERAL(): TerminalNode;
    LOCAL(): TerminalNode | undefined;
    PARTITION(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    uidList(): UidListContext | undefined;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    CHARACTER(): TerminalNode | undefined;
    SET(): TerminalNode[];
    SET(i: number): TerminalNode;
    LINES(): TerminalNode[];
    LINES(i: number): TerminalNode;
    IGNORE(): TerminalNode[];
    IGNORE(i: number): TerminalNode;
    decimalLiteral(): DecimalLiteralContext | undefined;
    assignmentField(): AssignmentFieldContext[];
    assignmentField(i: number): AssignmentFieldContext;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext;
    charsetName(): CharsetNameContext | undefined;
    LOW_PRIORITY(): TerminalNode | undefined;
    CONCURRENT(): TerminalNode | undefined;
    REPLACE(): TerminalNode | undefined;
    FIELDS(): TerminalNode | undefined;
    COLUMNS(): TerminalNode | undefined;
    ROWS(): TerminalNode | undefined;
    selectFieldsInto(): SelectFieldsIntoContext[];
    selectFieldsInto(i: number): SelectFieldsIntoContext;
    selectLinesInto(): SelectLinesIntoContext[];
    selectLinesInto(i: number): SelectLinesIntoContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LoadXmlStatementContext extends ParserRuleContext {
    _priority: Token;
    _filename: Token;
    _violation: Token;
    _charset: CharsetNameContext;
    _tag: Token;
    _linesFormat: Token;
    LOAD(): TerminalNode;
    XML(): TerminalNode;
    INFILE(): TerminalNode;
    INTO(): TerminalNode;
    TABLE(): TerminalNode;
    tableName(): TableNameContext;
    STRING_LITERAL(): TerminalNode[];
    STRING_LITERAL(i: number): TerminalNode;
    LOCAL(): TerminalNode | undefined;
    CHARACTER(): TerminalNode | undefined;
    SET(): TerminalNode[];
    SET(i: number): TerminalNode;
    ROWS(): TerminalNode[];
    ROWS(i: number): TerminalNode;
    IDENTIFIED(): TerminalNode | undefined;
    BY(): TerminalNode | undefined;
    LESS_SYMBOL(): TerminalNode | undefined;
    GREATER_SYMBOL(): TerminalNode | undefined;
    IGNORE(): TerminalNode[];
    IGNORE(i: number): TerminalNode;
    decimalLiteral(): DecimalLiteralContext | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    assignmentField(): AssignmentFieldContext[];
    assignmentField(i: number): AssignmentFieldContext;
    RR_BRACKET(): TerminalNode | undefined;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext;
    charsetName(): CharsetNameContext | undefined;
    LOW_PRIORITY(): TerminalNode | undefined;
    CONCURRENT(): TerminalNode | undefined;
    REPLACE(): TerminalNode | undefined;
    LINES(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ReplaceStatementContext extends ParserRuleContext {
    _priority: Token;
    _partitions: UidListContext;
    _columns: UidListContext;
    _setFirst: UpdatedElementContext;
    _updatedElement: UpdatedElementContext;
    _setElements: UpdatedElementContext[];
    REPLACE(): TerminalNode;
    tableName(): TableNameContext;
    insertStatementValue(): InsertStatementValueContext | undefined;
    SET(): TerminalNode | undefined;
    INTO(): TerminalNode | undefined;
    PARTITION(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext;
    uidList(): UidListContext[];
    uidList(i: number): UidListContext;
    LOW_PRIORITY(): TerminalNode | undefined;
    DELAYED(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectStatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SelectStatementContext): void;
}
export declare class SimpleSelectContext extends SelectStatementContext {
    querySpecification(): QuerySpecificationContext;
    lockClause(): LockClauseContext | undefined;
    constructor(ctx: SelectStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ParenthesisSelectContext extends SelectStatementContext {
    queryExpression(): QueryExpressionContext;
    lockClause(): LockClauseContext | undefined;
    constructor(ctx: SelectStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UnionSelectContext extends SelectStatementContext {
    _unionType: Token;
    querySpecificationNointo(): QuerySpecificationNointoContext;
    unionStatement(): UnionStatementContext[];
    unionStatement(i: number): UnionStatementContext;
    UNION(): TerminalNode | undefined;
    orderByClause(): OrderByClauseContext | undefined;
    limitClause(): LimitClauseContext | undefined;
    lockClause(): LockClauseContext | undefined;
    querySpecification(): QuerySpecificationContext | undefined;
    queryExpression(): QueryExpressionContext | undefined;
    ALL(): TerminalNode | undefined;
    DISTINCT(): TerminalNode | undefined;
    constructor(ctx: SelectStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UnionParenthesisSelectContext extends SelectStatementContext {
    _unionType: Token;
    queryExpressionNointo(): QueryExpressionNointoContext;
    unionParenthesis(): UnionParenthesisContext[];
    unionParenthesis(i: number): UnionParenthesisContext;
    UNION(): TerminalNode | undefined;
    queryExpression(): QueryExpressionContext | undefined;
    orderByClause(): OrderByClauseContext | undefined;
    limitClause(): LimitClauseContext | undefined;
    lockClause(): LockClauseContext | undefined;
    ALL(): TerminalNode | undefined;
    DISTINCT(): TerminalNode | undefined;
    constructor(ctx: SelectStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WithLateralStatementContext extends SelectStatementContext {
    querySpecificationNointo(): QuerySpecificationNointoContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    lateralStatement(): LateralStatementContext[];
    lateralStatement(i: number): LateralStatementContext;
    constructor(ctx: SelectStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UpdateStatementContext extends ParserRuleContext {
    singleUpdateStatement(): SingleUpdateStatementContext | undefined;
    multipleUpdateStatement(): MultipleUpdateStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ValuesStatementContext extends ParserRuleContext {
    VALUES(): TerminalNode;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    expressionsWithDefaults(): ExpressionsWithDefaultsContext[];
    expressionsWithDefaults(i: number): ExpressionsWithDefaultsContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class InsertStatementValueContext extends ParserRuleContext {
    _insertFormat: Token;
    selectStatement(): SelectStatementContext | undefined;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    VALUES(): TerminalNode | undefined;
    VALUE(): TerminalNode | undefined;
    expressionsWithDefaults(): ExpressionsWithDefaultsContext[];
    expressionsWithDefaults(i: number): ExpressionsWithDefaultsContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UpdatedElementContext extends ParserRuleContext {
    fullColumnName(): FullColumnNameContext;
    EQUAL_SYMBOL(): TerminalNode;
    expression(): ExpressionContext | undefined;
    DEFAULT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AssignmentFieldContext extends ParserRuleContext {
    uid(): UidContext | undefined;
    LOCAL_ID(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LockClauseContext extends ParserRuleContext {
    FOR(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    LOCK(): TerminalNode | undefined;
    IN(): TerminalNode | undefined;
    SHARE(): TerminalNode | undefined;
    MODE(): TerminalNode | undefined;
    lockOption(): LockOptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SingleDeleteStatementContext extends ParserRuleContext {
    _priority: Token;
    DELETE(): TerminalNode;
    FROM(): TerminalNode;
    tableName(): TableNameContext;
    QUICK(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    PARTITION(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    WHERE(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    orderByClause(): OrderByClauseContext | undefined;
    LIMIT(): TerminalNode | undefined;
    limitClauseAtom(): LimitClauseAtomContext | undefined;
    LOW_PRIORITY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MultipleDeleteStatementContext extends ParserRuleContext {
    _priority: Token;
    DELETE(): TerminalNode;
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext;
    FROM(): TerminalNode | undefined;
    tableSources(): TableSourcesContext | undefined;
    USING(): TerminalNode | undefined;
    QUICK(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    WHERE(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    LOW_PRIORITY(): TerminalNode | undefined;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    STAR(): TerminalNode[];
    STAR(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerOpenStatementContext extends ParserRuleContext {
    HANDLER(): TerminalNode;
    tableName(): TableNameContext;
    OPEN(): TerminalNode;
    uid(): UidContext | undefined;
    AS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerReadIndexStatementContext extends ParserRuleContext {
    _index: UidContext;
    _moveOrder: Token;
    HANDLER(): TerminalNode;
    tableName(): TableNameContext;
    READ(): TerminalNode;
    uid(): UidContext;
    comparisonOperator(): ComparisonOperatorContext | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    constants(): ConstantsContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    WHERE(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    LIMIT(): TerminalNode | undefined;
    limitClauseAtom(): LimitClauseAtomContext | undefined;
    FIRST(): TerminalNode | undefined;
    NEXT(): TerminalNode | undefined;
    PREV(): TerminalNode | undefined;
    LAST(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerReadStatementContext extends ParserRuleContext {
    _moveOrder: Token;
    HANDLER(): TerminalNode;
    tableName(): TableNameContext;
    READ(): TerminalNode;
    FIRST(): TerminalNode | undefined;
    NEXT(): TerminalNode | undefined;
    WHERE(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    LIMIT(): TerminalNode | undefined;
    limitClauseAtom(): LimitClauseAtomContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerCloseStatementContext extends ParserRuleContext {
    HANDLER(): TerminalNode;
    tableName(): TableNameContext;
    CLOSE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SingleUpdateStatementContext extends ParserRuleContext {
    _priority: Token;
    UPDATE(): TerminalNode;
    tableName(): TableNameContext;
    SET(): TerminalNode;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext;
    IGNORE(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WHERE(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    orderByClause(): OrderByClauseContext | undefined;
    limitClause(): LimitClauseContext | undefined;
    LOW_PRIORITY(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MultipleUpdateStatementContext extends ParserRuleContext {
    _priority: Token;
    UPDATE(): TerminalNode;
    tableSources(): TableSourcesContext;
    SET(): TerminalNode;
    updatedElement(): UpdatedElementContext[];
    updatedElement(i: number): UpdatedElementContext;
    IGNORE(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WHERE(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    LOW_PRIORITY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class OrderByClauseContext extends ParserRuleContext {
    ORDER(): TerminalNode;
    BY(): TerminalNode;
    orderByExpression(): OrderByExpressionContext[];
    orderByExpression(i: number): OrderByExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class OrderByExpressionContext extends ParserRuleContext {
    _order: Token;
    expression(): ExpressionContext;
    ASC(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableSourcesContext extends ParserRuleContext {
    tableSource(): TableSourceContext[];
    tableSource(i: number): TableSourceContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableSourceContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TableSourceContext): void;
}
export declare class TableSourceBaseContext extends TableSourceContext {
    tableSourceItem(): TableSourceItemContext;
    joinPart(): JoinPartContext[];
    joinPart(i: number): JoinPartContext;
    constructor(ctx: TableSourceContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableSourceNestedContext extends TableSourceContext {
    LR_BRACKET(): TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    RR_BRACKET(): TerminalNode;
    joinPart(): JoinPartContext[];
    joinPart(i: number): JoinPartContext;
    constructor(ctx: TableSourceContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableJsonContext extends TableSourceContext {
    jsonTable(): JsonTableContext;
    constructor(ctx: TableSourceContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableSourceItemContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: TableSourceItemContext): void;
}
export declare class AtomTableItemContext extends TableSourceItemContext {
    _alias: UidContext;
    tableName(): TableNameContext;
    PARTITION(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    indexHint(): IndexHintContext[];
    indexHint(i: number): IndexHintContext;
    uid(): UidContext | undefined;
    AS(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: TableSourceItemContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SubqueryTableItemContext extends TableSourceItemContext {
    _parenthesisSubquery: SelectStatementContext;
    _alias: UidContext;
    uid(): UidContext;
    selectStatement(): SelectStatementContext | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    constructor(ctx: TableSourceItemContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableSourcesItemContext extends TableSourceItemContext {
    LR_BRACKET(): TerminalNode;
    tableSources(): TableSourcesContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: TableSourceItemContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IndexHintContext extends ParserRuleContext {
    _indexHintAction: Token;
    _keyFormat: Token;
    LR_BRACKET(): TerminalNode;
    uidList(): UidListContext;
    RR_BRACKET(): TerminalNode;
    USE(): TerminalNode | undefined;
    IGNORE(): TerminalNode | undefined;
    FORCE(): TerminalNode | undefined;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    indexHintType(): IndexHintTypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IndexHintTypeContext extends ParserRuleContext {
    JOIN(): TerminalNode | undefined;
    ORDER(): TerminalNode | undefined;
    BY(): TerminalNode | undefined;
    GROUP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JoinPartContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: JoinPartContext): void;
}
export declare class InnerJoinContext extends JoinPartContext {
    JOIN(): TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    LATERAL(): TerminalNode | undefined;
    ON(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    USING(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    INNER(): TerminalNode | undefined;
    CROSS(): TerminalNode | undefined;
    constructor(ctx: JoinPartContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StraightJoinContext extends JoinPartContext {
    STRAIGHT_JOIN(): TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    ON(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    constructor(ctx: JoinPartContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class OuterJoinContext extends JoinPartContext {
    JOIN(): TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    LEFT(): TerminalNode | undefined;
    RIGHT(): TerminalNode | undefined;
    ON(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    USING(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    OUTER(): TerminalNode | undefined;
    LATERAL(): TerminalNode | undefined;
    constructor(ctx: JoinPartContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class NaturalJoinContext extends JoinPartContext {
    NATURAL(): TerminalNode;
    JOIN(): TerminalNode;
    tableSourceItem(): TableSourceItemContext;
    LEFT(): TerminalNode | undefined;
    RIGHT(): TerminalNode | undefined;
    OUTER(): TerminalNode | undefined;
    constructor(ctx: JoinPartContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class QueryExpressionContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode;
    querySpecification(): QuerySpecificationContext | undefined;
    RR_BRACKET(): TerminalNode;
    queryExpression(): QueryExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class QueryExpressionNointoContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode;
    querySpecificationNointo(): QuerySpecificationNointoContext | undefined;
    RR_BRACKET(): TerminalNode;
    queryExpressionNointo(): QueryExpressionNointoContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class QuerySpecificationContext extends ParserRuleContext {
    SELECT(): TerminalNode;
    selectElements(): SelectElementsContext;
    selectSpec(): SelectSpecContext[];
    selectSpec(i: number): SelectSpecContext;
    selectIntoExpression(): SelectIntoExpressionContext | undefined;
    fromClause(): FromClauseContext | undefined;
    groupByClause(): GroupByClauseContext | undefined;
    havingClause(): HavingClauseContext | undefined;
    windowClause(): WindowClauseContext | undefined;
    orderByClause(): OrderByClauseContext | undefined;
    limitClause(): LimitClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class QuerySpecificationNointoContext extends ParserRuleContext {
    SELECT(): TerminalNode;
    selectElements(): SelectElementsContext;
    selectSpec(): SelectSpecContext[];
    selectSpec(i: number): SelectSpecContext;
    fromClause(): FromClauseContext | undefined;
    groupByClause(): GroupByClauseContext | undefined;
    havingClause(): HavingClauseContext | undefined;
    windowClause(): WindowClauseContext | undefined;
    orderByClause(): OrderByClauseContext | undefined;
    limitClause(): LimitClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UnionParenthesisContext extends ParserRuleContext {
    _unionType: Token;
    UNION(): TerminalNode;
    queryExpressionNointo(): QueryExpressionNointoContext;
    ALL(): TerminalNode | undefined;
    DISTINCT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UnionStatementContext extends ParserRuleContext {
    _unionType: Token;
    UNION(): TerminalNode;
    querySpecificationNointo(): QuerySpecificationNointoContext | undefined;
    queryExpressionNointo(): QueryExpressionNointoContext | undefined;
    ALL(): TerminalNode | undefined;
    DISTINCT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LateralStatementContext extends ParserRuleContext {
    LATERAL(): TerminalNode;
    querySpecificationNointo(): QuerySpecificationNointoContext | undefined;
    queryExpressionNointo(): QueryExpressionNointoContext | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    AS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JsonTableContext extends ParserRuleContext {
    JSON_TABLE(): TerminalNode;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    STRING_LITERAL(): TerminalNode[];
    STRING_LITERAL(i: number): TerminalNode;
    COMMA(): TerminalNode;
    COLUMNS(): TerminalNode;
    jsonColumnList(): JsonColumnListContext;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    uid(): UidContext | undefined;
    AS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JsonColumnListContext extends ParserRuleContext {
    jsonColumn(): JsonColumnContext[];
    jsonColumn(i: number): JsonColumnContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JsonColumnContext extends ParserRuleContext {
    fullColumnName(): FullColumnNameContext | undefined;
    FOR(): TerminalNode | undefined;
    ORDINALITY(): TerminalNode | undefined;
    dataType(): DataTypeContext | undefined;
    PATH(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    EXISTS(): TerminalNode | undefined;
    jsonOnEmpty(): JsonOnEmptyContext | undefined;
    jsonOnError(): JsonOnErrorContext | undefined;
    NESTED(): TerminalNode | undefined;
    COLUMNS(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    jsonColumnList(): JsonColumnListContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JsonOnEmptyContext extends ParserRuleContext {
    ON(): TerminalNode;
    EMPTY(): TerminalNode;
    NULL_LITERAL(): TerminalNode | undefined;
    ERROR(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    defaultValue(): DefaultValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JsonOnErrorContext extends ParserRuleContext {
    ON(): TerminalNode;
    ERROR(): TerminalNode[];
    ERROR(i: number): TerminalNode;
    NULL_LITERAL(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    defaultValue(): DefaultValueContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectSpecContext extends ParserRuleContext {
    ALL(): TerminalNode | undefined;
    DISTINCT(): TerminalNode | undefined;
    DISTINCTROW(): TerminalNode | undefined;
    HIGH_PRIORITY(): TerminalNode | undefined;
    STRAIGHT_JOIN(): TerminalNode | undefined;
    SQL_SMALL_RESULT(): TerminalNode | undefined;
    SQL_BIG_RESULT(): TerminalNode | undefined;
    SQL_BUFFER_RESULT(): TerminalNode | undefined;
    SQL_CACHE(): TerminalNode | undefined;
    SQL_NO_CACHE(): TerminalNode | undefined;
    SQL_CALC_FOUND_ROWS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectElementsContext extends ParserRuleContext {
    _star: Token;
    selectElement(): SelectElementContext[];
    selectElement(i: number): SelectElementContext;
    STAR(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectElementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SelectElementContext): void;
}
export declare class SelectStarElementContext extends SelectElementContext {
    fullId(): FullIdContext;
    DOT(): TerminalNode;
    STAR(): TerminalNode;
    constructor(ctx: SelectElementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectColumnElementContext extends SelectElementContext {
    fullColumnName(): FullColumnNameContext;
    uid(): UidContext | undefined;
    AS(): TerminalNode | undefined;
    constructor(ctx: SelectElementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectFunctionElementContext extends SelectElementContext {
    functionCall(): FunctionCallContext;
    uid(): UidContext | undefined;
    AS(): TerminalNode | undefined;
    constructor(ctx: SelectElementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectExpressionElementContext extends SelectElementContext {
    expression(): ExpressionContext;
    LOCAL_ID(): TerminalNode | undefined;
    VAR_ASSIGN(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    AS(): TerminalNode | undefined;
    constructor(ctx: SelectElementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectIntoExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SelectIntoExpressionContext): void;
}
export declare class SelectIntoVariablesContext extends SelectIntoExpressionContext {
    INTO(): TerminalNode;
    assignmentField(): AssignmentFieldContext[];
    assignmentField(i: number): AssignmentFieldContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: SelectIntoExpressionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectIntoDumpFileContext extends SelectIntoExpressionContext {
    INTO(): TerminalNode;
    DUMPFILE(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(ctx: SelectIntoExpressionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectIntoTextFileContext extends SelectIntoExpressionContext {
    _filename: Token;
    _charset: CharsetNameContext;
    _fieldsFormat: Token;
    INTO(): TerminalNode | undefined;
    OUTFILE(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    CHARACTER(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    LINES(): TerminalNode | undefined;
    charsetName(): CharsetNameContext | undefined;
    FIELDS(): TerminalNode | undefined;
    COLUMNS(): TerminalNode | undefined;
    selectFieldsInto(): SelectFieldsIntoContext[];
    selectFieldsInto(i: number): SelectFieldsIntoContext;
    selectLinesInto(): SelectLinesIntoContext[];
    selectLinesInto(i: number): SelectLinesIntoContext;
    constructor(ctx: SelectIntoExpressionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectFieldsIntoContext extends ParserRuleContext {
    _terminationField: Token;
    _enclosion: Token;
    _escaping: Token;
    TERMINATED(): TerminalNode | undefined;
    BY(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    ENCLOSED(): TerminalNode | undefined;
    OPTIONALLY(): TerminalNode | undefined;
    ESCAPED(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SelectLinesIntoContext extends ParserRuleContext {
    _starting: Token;
    _terminationLine: Token;
    STARTING(): TerminalNode | undefined;
    BY(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    TERMINATED(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FromClauseContext extends ParserRuleContext {
    _whereExpr: ExpressionContext;
    FROM(): TerminalNode | undefined;
    tableSources(): TableSourcesContext | undefined;
    WHERE(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class GroupByClauseContext extends ParserRuleContext {
    GROUP(): TerminalNode;
    BY(): TerminalNode;
    groupByItem(): GroupByItemContext[];
    groupByItem(i: number): GroupByItemContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WITH(): TerminalNode | undefined;
    ROLLUP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HavingClauseContext extends ParserRuleContext {
    _havingExpr: ExpressionContext;
    HAVING(): TerminalNode;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WindowClauseContext extends ParserRuleContext {
    WINDOW(): TerminalNode;
    windowName(): WindowNameContext[];
    windowName(i: number): WindowNameContext;
    AS(): TerminalNode[];
    AS(i: number): TerminalNode;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    windowSpec(): WindowSpecContext[];
    windowSpec(i: number): WindowSpecContext;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class GroupByItemContext extends ParserRuleContext {
    _order: Token;
    expression(): ExpressionContext;
    ASC(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LimitClauseContext extends ParserRuleContext {
    _offset: LimitClauseAtomContext;
    _limit: LimitClauseAtomContext;
    LIMIT(): TerminalNode;
    OFFSET(): TerminalNode | undefined;
    limitClauseAtom(): LimitClauseAtomContext[];
    limitClauseAtom(i: number): LimitClauseAtomContext;
    COMMA(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LimitClauseAtomContext extends ParserRuleContext {
    decimalLiteral(): DecimalLiteralContext | undefined;
    mysqlVariable(): MysqlVariableContext | undefined;
    simpleId(): SimpleIdContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StartTransactionContext extends ParserRuleContext {
    START(): TerminalNode;
    TRANSACTION(): TerminalNode;
    transactionMode(): TransactionModeContext[];
    transactionMode(i: number): TransactionModeContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BeginWorkContext extends ParserRuleContext {
    BEGIN(): TerminalNode;
    WORK(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CommitWorkContext extends ParserRuleContext {
    _nochain: Token;
    _norelease: Token;
    COMMIT(): TerminalNode;
    WORK(): TerminalNode | undefined;
    AND(): TerminalNode | undefined;
    CHAIN(): TerminalNode | undefined;
    RELEASE(): TerminalNode | undefined;
    NO(): TerminalNode[];
    NO(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RollbackWorkContext extends ParserRuleContext {
    _nochain: Token;
    _norelease: Token;
    ROLLBACK(): TerminalNode;
    WORK(): TerminalNode | undefined;
    AND(): TerminalNode | undefined;
    CHAIN(): TerminalNode | undefined;
    RELEASE(): TerminalNode | undefined;
    NO(): TerminalNode[];
    NO(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SavepointStatementContext extends ParserRuleContext {
    SAVEPOINT(): TerminalNode;
    uid(): UidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RollbackStatementContext extends ParserRuleContext {
    ROLLBACK(): TerminalNode;
    TO(): TerminalNode;
    uid(): UidContext;
    WORK(): TerminalNode | undefined;
    SAVEPOINT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ReleaseStatementContext extends ParserRuleContext {
    RELEASE(): TerminalNode;
    SAVEPOINT(): TerminalNode;
    uid(): UidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LockTablesContext extends ParserRuleContext {
    LOCK(): TerminalNode;
    lockTableElement(): LockTableElementContext[];
    lockTableElement(i: number): LockTableElementContext;
    TABLE(): TerminalNode | undefined;
    TABLES(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    waitNowaitClause(): WaitNowaitClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UnlockTablesContext extends ParserRuleContext {
    UNLOCK(): TerminalNode;
    TABLES(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetAutocommitStatementContext extends ParserRuleContext {
    _autocommitValue: Token;
    SET(): TerminalNode;
    AUTOCOMMIT(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetTransactionStatementContext extends ParserRuleContext {
    _transactionContext: Token;
    SET(): TerminalNode;
    TRANSACTION(): TerminalNode;
    transactionOption(): TransactionOptionContext[];
    transactionOption(i: number): TransactionOptionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    GLOBAL(): TerminalNode | undefined;
    SESSION(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TransactionModeContext extends ParserRuleContext {
    WITH(): TerminalNode | undefined;
    CONSISTENT(): TerminalNode | undefined;
    SNAPSHOT(): TerminalNode | undefined;
    READ(): TerminalNode | undefined;
    WRITE(): TerminalNode | undefined;
    ONLY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LockTableElementContext extends ParserRuleContext {
    tableName(): TableNameContext;
    lockAction(): LockActionContext;
    uid(): UidContext | undefined;
    AS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LockActionContext extends ParserRuleContext {
    READ(): TerminalNode | undefined;
    LOCAL(): TerminalNode | undefined;
    WRITE(): TerminalNode | undefined;
    LOW_PRIORITY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TransactionOptionContext extends ParserRuleContext {
    ISOLATION(): TerminalNode | undefined;
    LEVEL(): TerminalNode | undefined;
    transactionLevel(): TransactionLevelContext | undefined;
    READ(): TerminalNode | undefined;
    WRITE(): TerminalNode | undefined;
    ONLY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TransactionLevelContext extends ParserRuleContext {
    REPEATABLE(): TerminalNode | undefined;
    READ(): TerminalNode | undefined;
    COMMITTED(): TerminalNode | undefined;
    UNCOMMITTED(): TerminalNode | undefined;
    SERIALIZABLE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ChangeMasterContext extends ParserRuleContext {
    CHANGE(): TerminalNode;
    MASTER(): TerminalNode;
    TO(): TerminalNode;
    masterOption(): MasterOptionContext[];
    masterOption(i: number): MasterOptionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    channelOption(): ChannelOptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ChangeReplicationFilterContext extends ParserRuleContext {
    CHANGE(): TerminalNode;
    REPLICATION(): TerminalNode;
    FILTER(): TerminalNode;
    replicationFilter(): ReplicationFilterContext[];
    replicationFilter(i: number): ReplicationFilterContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PurgeBinaryLogsContext extends ParserRuleContext {
    _purgeFormat: Token;
    _fileName: Token;
    _timeValue: Token;
    PURGE(): TerminalNode;
    LOGS(): TerminalNode;
    BINARY(): TerminalNode | undefined;
    MASTER(): TerminalNode | undefined;
    TO(): TerminalNode | undefined;
    BEFORE(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ResetMasterContext extends ParserRuleContext {
    RESET(): TerminalNode;
    MASTER(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ResetSlaveContext extends ParserRuleContext {
    RESET(): TerminalNode;
    SLAVE(): TerminalNode;
    ALL(): TerminalNode | undefined;
    channelOption(): ChannelOptionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StartSlaveContext extends ParserRuleContext {
    START(): TerminalNode;
    SLAVE(): TerminalNode;
    threadType(): ThreadTypeContext[];
    threadType(i: number): ThreadTypeContext;
    UNTIL(): TerminalNode | undefined;
    untilOption(): UntilOptionContext | undefined;
    connectionOption(): ConnectionOptionContext[];
    connectionOption(i: number): ConnectionOptionContext;
    channelOption(): ChannelOptionContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StopSlaveContext extends ParserRuleContext {
    STOP(): TerminalNode;
    SLAVE(): TerminalNode;
    threadType(): ThreadTypeContext[];
    threadType(i: number): ThreadTypeContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StartGroupReplicationContext extends ParserRuleContext {
    START(): TerminalNode;
    GROUP_REPLICATION(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StopGroupReplicationContext extends ParserRuleContext {
    STOP(): TerminalNode;
    GROUP_REPLICATION(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MasterOptionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: MasterOptionContext): void;
}
export declare class MasterStringOptionContext extends MasterOptionContext {
    stringMasterOption(): StringMasterOptionContext;
    EQUAL_SYMBOL(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(ctx: MasterOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MasterDecimalOptionContext extends MasterOptionContext {
    decimalMasterOption(): DecimalMasterOptionContext;
    EQUAL_SYMBOL(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    constructor(ctx: MasterOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MasterBoolOptionContext extends MasterOptionContext {
    _boolVal: Token;
    boolMasterOption(): BoolMasterOptionContext;
    EQUAL_SYMBOL(): TerminalNode;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    constructor(ctx: MasterOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MasterRealOptionContext extends MasterOptionContext {
    MASTER_HEARTBEAT_PERIOD(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    REAL_LITERAL(): TerminalNode;
    constructor(ctx: MasterOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MasterUidListOptionContext extends MasterOptionContext {
    IGNORE_SERVER_IDS(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: MasterOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StringMasterOptionContext extends ParserRuleContext {
    MASTER_BIND(): TerminalNode | undefined;
    MASTER_HOST(): TerminalNode | undefined;
    MASTER_USER(): TerminalNode | undefined;
    MASTER_PASSWORD(): TerminalNode | undefined;
    MASTER_LOG_FILE(): TerminalNode | undefined;
    RELAY_LOG_FILE(): TerminalNode | undefined;
    MASTER_SSL_CA(): TerminalNode | undefined;
    MASTER_SSL_CAPATH(): TerminalNode | undefined;
    MASTER_SSL_CERT(): TerminalNode | undefined;
    MASTER_SSL_CRL(): TerminalNode | undefined;
    MASTER_SSL_CRLPATH(): TerminalNode | undefined;
    MASTER_SSL_KEY(): TerminalNode | undefined;
    MASTER_SSL_CIPHER(): TerminalNode | undefined;
    MASTER_TLS_VERSION(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DecimalMasterOptionContext extends ParserRuleContext {
    MASTER_PORT(): TerminalNode | undefined;
    MASTER_CONNECT_RETRY(): TerminalNode | undefined;
    MASTER_RETRY_COUNT(): TerminalNode | undefined;
    MASTER_DELAY(): TerminalNode | undefined;
    MASTER_LOG_POS(): TerminalNode | undefined;
    RELAY_LOG_POS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BoolMasterOptionContext extends ParserRuleContext {
    MASTER_AUTO_POSITION(): TerminalNode | undefined;
    MASTER_SSL(): TerminalNode | undefined;
    MASTER_SSL_VERIFY_SERVER_CERT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ChannelOptionContext extends ParserRuleContext {
    FOR(): TerminalNode;
    CHANNEL(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ReplicationFilterContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ReplicationFilterContext): void;
}
export declare class DoDbReplicationContext extends ReplicationFilterContext {
    REPLICATE_DO_DB(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    uidList(): UidListContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: ReplicationFilterContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IgnoreDbReplicationContext extends ReplicationFilterContext {
    REPLICATE_IGNORE_DB(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    uidList(): UidListContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: ReplicationFilterContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DoTableReplicationContext extends ReplicationFilterContext {
    REPLICATE_DO_TABLE(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    tables(): TablesContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: ReplicationFilterContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IgnoreTableReplicationContext extends ReplicationFilterContext {
    REPLICATE_IGNORE_TABLE(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    tables(): TablesContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: ReplicationFilterContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WildDoTableReplicationContext extends ReplicationFilterContext {
    REPLICATE_WILD_DO_TABLE(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    simpleStrings(): SimpleStringsContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: ReplicationFilterContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WildIgnoreTableReplicationContext extends ReplicationFilterContext {
    REPLICATE_WILD_IGNORE_TABLE(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    simpleStrings(): SimpleStringsContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: ReplicationFilterContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RewriteDbReplicationContext extends ReplicationFilterContext {
    REPLICATE_REWRITE_DB(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    tablePair(): TablePairContext[];
    tablePair(i: number): TablePairContext;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ReplicationFilterContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TablePairContext extends ParserRuleContext {
    _firstTable: TableNameContext;
    _secondTable: TableNameContext;
    LR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ThreadTypeContext extends ParserRuleContext {
    IO_THREAD(): TerminalNode | undefined;
    SQL_THREAD(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UntilOptionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: UntilOptionContext): void;
}
export declare class GtidsUntilOptionContext extends UntilOptionContext {
    _gtids: Token;
    EQUAL_SYMBOL(): TerminalNode;
    gtuidSet(): GtuidSetContext;
    SQL_BEFORE_GTIDS(): TerminalNode | undefined;
    SQL_AFTER_GTIDS(): TerminalNode | undefined;
    constructor(ctx: UntilOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MasterLogUntilOptionContext extends UntilOptionContext {
    MASTER_LOG_FILE(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    COMMA(): TerminalNode;
    MASTER_LOG_POS(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    constructor(ctx: UntilOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RelayLogUntilOptionContext extends UntilOptionContext {
    RELAY_LOG_FILE(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    COMMA(): TerminalNode;
    RELAY_LOG_POS(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    constructor(ctx: UntilOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SqlGapsUntilOptionContext extends UntilOptionContext {
    SQL_AFTER_MTS_GAPS(): TerminalNode;
    constructor(ctx: UntilOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ConnectionOptionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ConnectionOptionContext): void;
}
export declare class UserConnectionOptionContext extends ConnectionOptionContext {
    _conOptUser: Token;
    USER(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(ctx: ConnectionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PasswordConnectionOptionContext extends ConnectionOptionContext {
    _conOptPassword: Token;
    PASSWORD(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(ctx: ConnectionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DefaultAuthConnectionOptionContext extends ConnectionOptionContext {
    _conOptDefAuth: Token;
    DEFAULT_AUTH(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(ctx: ConnectionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PluginDirConnectionOptionContext extends ConnectionOptionContext {
    _conOptPluginDir: Token;
    PLUGIN_DIR(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(ctx: ConnectionOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class GtuidSetContext extends ParserRuleContext {
    uuidSet(): UuidSetContext[];
    uuidSet(i: number): UuidSetContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class XaStartTransactionContext extends ParserRuleContext {
    _xaStart: Token;
    _xaAction: Token;
    XA(): TerminalNode;
    xid(): XidContext;
    START(): TerminalNode | undefined;
    BEGIN(): TerminalNode | undefined;
    JOIN(): TerminalNode | undefined;
    RESUME(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class XaEndTransactionContext extends ParserRuleContext {
    XA(): TerminalNode;
    END(): TerminalNode;
    xid(): XidContext;
    SUSPEND(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    MIGRATE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class XaPrepareStatementContext extends ParserRuleContext {
    XA(): TerminalNode;
    PREPARE(): TerminalNode;
    xid(): XidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class XaCommitWorkContext extends ParserRuleContext {
    XA(): TerminalNode;
    COMMIT(): TerminalNode;
    xid(): XidContext;
    ONE(): TerminalNode | undefined;
    PHASE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class XaRollbackWorkContext extends ParserRuleContext {
    XA(): TerminalNode;
    ROLLBACK(): TerminalNode;
    xid(): XidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class XaRecoverWorkContext extends ParserRuleContext {
    XA(): TerminalNode;
    RECOVER(): TerminalNode;
    CONVERT(): TerminalNode | undefined;
    xid(): XidContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PrepareStatementContext extends ParserRuleContext {
    _query: Token;
    _variable: Token;
    PREPARE(): TerminalNode;
    uid(): UidContext;
    FROM(): TerminalNode;
    STRING_LITERAL(): TerminalNode | undefined;
    LOCAL_ID(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExecuteStatementContext extends ParserRuleContext {
    EXECUTE(): TerminalNode;
    uid(): UidContext;
    USING(): TerminalNode | undefined;
    userVariables(): UserVariablesContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DeallocatePrepareContext extends ParserRuleContext {
    _dropFormat: Token;
    PREPARE(): TerminalNode;
    uid(): UidContext;
    DEALLOCATE(): TerminalNode | undefined;
    DROP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RoutineBodyContext extends ParserRuleContext {
    blockStatement(): BlockStatementContext | undefined;
    sqlStatement(): SqlStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BlockStatementContext extends ParserRuleContext {
    BEGIN(): TerminalNode;
    END(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    COLON_SYMB(): TerminalNode | undefined;
    declareVariable(): DeclareVariableContext[];
    declareVariable(i: number): DeclareVariableContext;
    SEMI(): TerminalNode[];
    SEMI(i: number): TerminalNode;
    declareCondition(): DeclareConditionContext[];
    declareCondition(i: number): DeclareConditionContext;
    declareCursor(): DeclareCursorContext[];
    declareCursor(i: number): DeclareCursorContext;
    declareHandler(): DeclareHandlerContext[];
    declareHandler(i: number): DeclareHandlerContext;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CaseStatementContext extends ParserRuleContext {
    CASE(): TerminalNode[];
    CASE(i: number): TerminalNode;
    END(): TerminalNode;
    uid(): UidContext | undefined;
    expression(): ExpressionContext | undefined;
    caseAlternative(): CaseAlternativeContext[];
    caseAlternative(i: number): CaseAlternativeContext;
    ELSE(): TerminalNode | undefined;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IfStatementContext extends ParserRuleContext {
    _procedureSqlStatement: ProcedureSqlStatementContext;
    _thenStatements: ProcedureSqlStatementContext[];
    _elseStatements: ProcedureSqlStatementContext[];
    IF(): TerminalNode[];
    IF(i: number): TerminalNode;
    expression(): ExpressionContext;
    THEN(): TerminalNode;
    END(): TerminalNode;
    elifAlternative(): ElifAlternativeContext[];
    elifAlternative(i: number): ElifAlternativeContext;
    ELSE(): TerminalNode | undefined;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IterateStatementContext extends ParserRuleContext {
    ITERATE(): TerminalNode;
    uid(): UidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LeaveStatementContext extends ParserRuleContext {
    LEAVE(): TerminalNode;
    uid(): UidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LoopStatementContext extends ParserRuleContext {
    LOOP(): TerminalNode[];
    LOOP(i: number): TerminalNode;
    END(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    COLON_SYMB(): TerminalNode | undefined;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RepeatStatementContext extends ParserRuleContext {
    REPEAT(): TerminalNode[];
    REPEAT(i: number): TerminalNode;
    UNTIL(): TerminalNode;
    expression(): ExpressionContext;
    END(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    COLON_SYMB(): TerminalNode | undefined;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ReturnStatementContext extends ParserRuleContext {
    RETURN(): TerminalNode;
    expression(): ExpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WhileStatementContext extends ParserRuleContext {
    WHILE(): TerminalNode[];
    WHILE(i: number): TerminalNode;
    expression(): ExpressionContext;
    DO(): TerminalNode;
    END(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    COLON_SYMB(): TerminalNode | undefined;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CursorStatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CursorStatementContext): void;
}
export declare class CloseCursorContext extends CursorStatementContext {
    CLOSE(): TerminalNode;
    uid(): UidContext;
    constructor(ctx: CursorStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FetchCursorContext extends CursorStatementContext {
    FETCH(): TerminalNode;
    uid(): UidContext;
    INTO(): TerminalNode;
    uidList(): UidListContext;
    FROM(): TerminalNode | undefined;
    NEXT(): TerminalNode | undefined;
    constructor(ctx: CursorStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class OpenCursorContext extends CursorStatementContext {
    OPEN(): TerminalNode;
    uid(): UidContext;
    constructor(ctx: CursorStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DeclareVariableContext extends ParserRuleContext {
    DECLARE(): TerminalNode;
    uidList(): UidListContext;
    dataType(): DataTypeContext;
    DEFAULT(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DeclareConditionContext extends ParserRuleContext {
    DECLARE(): TerminalNode;
    uid(): UidContext;
    CONDITION(): TerminalNode;
    FOR(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext | undefined;
    SQLSTATE(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    VALUE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DeclareCursorContext extends ParserRuleContext {
    DECLARE(): TerminalNode;
    uid(): UidContext;
    CURSOR(): TerminalNode;
    FOR(): TerminalNode;
    selectStatement(): SelectStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DeclareHandlerContext extends ParserRuleContext {
    _handlerAction: Token;
    DECLARE(): TerminalNode;
    HANDLER(): TerminalNode;
    FOR(): TerminalNode;
    handlerConditionValue(): HandlerConditionValueContext[];
    handlerConditionValue(i: number): HandlerConditionValueContext;
    routineBody(): RoutineBodyContext;
    CONTINUE(): TerminalNode | undefined;
    EXIT(): TerminalNode | undefined;
    UNDO(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerConditionValueContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: HandlerConditionValueContext): void;
}
export declare class HandlerConditionCodeContext extends HandlerConditionValueContext {
    decimalLiteral(): DecimalLiteralContext;
    constructor(ctx: HandlerConditionValueContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerConditionStateContext extends HandlerConditionValueContext {
    SQLSTATE(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    VALUE(): TerminalNode | undefined;
    constructor(ctx: HandlerConditionValueContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerConditionNameContext extends HandlerConditionValueContext {
    uid(): UidContext;
    constructor(ctx: HandlerConditionValueContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerConditionWarningContext extends HandlerConditionValueContext {
    SQLWARNING(): TerminalNode;
    constructor(ctx: HandlerConditionValueContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerConditionNotfoundContext extends HandlerConditionValueContext {
    NOT(): TerminalNode;
    FOUND(): TerminalNode;
    constructor(ctx: HandlerConditionValueContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HandlerConditionExceptionContext extends HandlerConditionValueContext {
    SQLEXCEPTION(): TerminalNode;
    constructor(ctx: HandlerConditionValueContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ProcedureSqlStatementContext extends ParserRuleContext {
    SEMI(): TerminalNode;
    compoundStatement(): CompoundStatementContext | undefined;
    sqlStatement(): SqlStatementContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CaseAlternativeContext extends ParserRuleContext {
    WHEN(): TerminalNode;
    THEN(): TerminalNode;
    constant(): ConstantContext | undefined;
    expression(): ExpressionContext | undefined;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ElifAlternativeContext extends ParserRuleContext {
    ELSEIF(): TerminalNode;
    expression(): ExpressionContext;
    THEN(): TerminalNode;
    procedureSqlStatement(): ProcedureSqlStatementContext[];
    procedureSqlStatement(i: number): ProcedureSqlStatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterUserContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AlterUserContext): void;
}
export declare class AlterUserMysqlV56Context extends AlterUserContext {
    ALTER(): TerminalNode;
    USER(): TerminalNode;
    userSpecification(): UserSpecificationContext[];
    userSpecification(i: number): UserSpecificationContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: AlterUserContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AlterUserMysqlV80Context extends AlterUserContext {
    _tlsNone: Token;
    ALTER(): TerminalNode;
    USER(): TerminalNode;
    userAuthOption(): UserAuthOptionContext[];
    userAuthOption(i: number): UserAuthOptionContext;
    ifExists(): IfExistsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    REQUIRE(): TerminalNode | undefined;
    WITH(): TerminalNode | undefined;
    userPasswordOption(): UserPasswordOptionContext[];
    userPasswordOption(i: number): UserPasswordOptionContext;
    userLockOption(): UserLockOptionContext[];
    userLockOption(i: number): UserLockOptionContext;
    COMMENT(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    ATTRIBUTE(): TerminalNode | undefined;
    tlsOption(): TlsOptionContext[];
    tlsOption(i: number): TlsOptionContext;
    NONE(): TerminalNode | undefined;
    userResourceOption(): UserResourceOptionContext[];
    userResourceOption(i: number): UserResourceOptionContext;
    AND(): TerminalNode[];
    AND(i: number): TerminalNode;
    constructor(ctx: AlterUserContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateUserContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: CreateUserContext): void;
}
export declare class CreateUserMysqlV56Context extends CreateUserContext {
    CREATE(): TerminalNode;
    USER(): TerminalNode;
    userAuthOption(): UserAuthOptionContext[];
    userAuthOption(i: number): UserAuthOptionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: CreateUserContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateUserMysqlV80Context extends CreateUserContext {
    _tlsNone: Token;
    CREATE(): TerminalNode;
    USER(): TerminalNode;
    userAuthOption(): UserAuthOptionContext[];
    userAuthOption(i: number): UserAuthOptionContext;
    ifNotExists(): IfNotExistsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    REQUIRE(): TerminalNode | undefined;
    WITH(): TerminalNode | undefined;
    userPasswordOption(): UserPasswordOptionContext[];
    userPasswordOption(i: number): UserPasswordOptionContext;
    userLockOption(): UserLockOptionContext[];
    userLockOption(i: number): UserLockOptionContext;
    COMMENT(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    ATTRIBUTE(): TerminalNode | undefined;
    tlsOption(): TlsOptionContext[];
    tlsOption(i: number): TlsOptionContext;
    NONE(): TerminalNode | undefined;
    userResourceOption(): UserResourceOptionContext[];
    userResourceOption(i: number): UserResourceOptionContext;
    AND(): TerminalNode[];
    AND(i: number): TerminalNode;
    constructor(ctx: CreateUserContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DropUserContext extends ParserRuleContext {
    DROP(): TerminalNode;
    USER(): TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    ifExists(): IfExistsContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class GrantStatementContext extends ParserRuleContext {
    _privilegeObject: Token;
    _tlsNone: Token;
    GRANT(): TerminalNode[];
    GRANT(i: number): TerminalNode;
    privelegeClause(): PrivelegeClauseContext[];
    privelegeClause(i: number): PrivelegeClauseContext;
    ON(): TerminalNode | undefined;
    privilegeLevel(): PrivilegeLevelContext | undefined;
    TO(): TerminalNode;
    userAuthOption(): UserAuthOptionContext[];
    userAuthOption(i: number): UserAuthOptionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    REQUIRE(): TerminalNode | undefined;
    WITH(): TerminalNode[];
    WITH(i: number): TerminalNode;
    AS(): TerminalNode | undefined;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    ROLE(): TerminalNode | undefined;
    roleOption(): RoleOptionContext | undefined;
    TABLE(): TerminalNode | undefined;
    FUNCTION(): TerminalNode | undefined;
    PROCEDURE(): TerminalNode | undefined;
    tlsOption(): TlsOptionContext[];
    tlsOption(i: number): TlsOptionContext;
    NONE(): TerminalNode | undefined;
    OPTION(): TerminalNode[];
    OPTION(i: number): TerminalNode;
    userResourceOption(): UserResourceOptionContext[];
    userResourceOption(i: number): UserResourceOptionContext;
    AND(): TerminalNode[];
    AND(i: number): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    ADMIN(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RoleOptionContext extends ParserRuleContext {
    DEFAULT(): TerminalNode | undefined;
    NONE(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    EXCEPT(): TerminalNode | undefined;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class GrantProxyContext extends ParserRuleContext {
    _fromFirst: UserNameContext;
    _toFirst: UserNameContext;
    _userName: UserNameContext;
    _toOther: UserNameContext[];
    GRANT(): TerminalNode[];
    GRANT(i: number): TerminalNode;
    PROXY(): TerminalNode;
    ON(): TerminalNode;
    TO(): TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WITH(): TerminalNode | undefined;
    OPTION(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RenameUserContext extends ParserRuleContext {
    RENAME(): TerminalNode;
    USER(): TerminalNode;
    renameUserClause(): RenameUserClauseContext[];
    renameUserClause(i: number): RenameUserClauseContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RevokeStatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: RevokeStatementContext): void;
}
export declare class DetailRevokeContext extends RevokeStatementContext {
    _privilegeObject: Token;
    REVOKE(): TerminalNode;
    privelegeClause(): PrivelegeClauseContext[];
    privelegeClause(i: number): PrivelegeClauseContext;
    ON(): TerminalNode;
    privilegeLevel(): PrivilegeLevelContext;
    FROM(): TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    TABLE(): TerminalNode | undefined;
    FUNCTION(): TerminalNode | undefined;
    PROCEDURE(): TerminalNode | undefined;
    constructor(ctx: RevokeStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShortRevokeContext extends RevokeStatementContext {
    REVOKE(): TerminalNode;
    ALL(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    GRANT(): TerminalNode;
    OPTION(): TerminalNode;
    FROM(): TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    PRIVILEGES(): TerminalNode | undefined;
    constructor(ctx: RevokeStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RoleRevokeContext extends RevokeStatementContext {
    REVOKE(): TerminalNode;
    uid(): UidContext[];
    uid(i: number): UidContext;
    FROM(): TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: RevokeStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RevokeProxyContext extends ParserRuleContext {
    _onUser: UserNameContext;
    _fromFirst: UserNameContext;
    _userName: UserNameContext;
    _fromOther: UserNameContext[];
    REVOKE(): TerminalNode;
    PROXY(): TerminalNode;
    ON(): TerminalNode;
    FROM(): TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetPasswordStatementContext extends ParserRuleContext {
    SET(): TerminalNode;
    PASSWORD(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    passwordFunctionClause(): PasswordFunctionClauseContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    userName(): UserNameContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UserSpecificationContext extends ParserRuleContext {
    userName(): UserNameContext;
    userPasswordOption(): UserPasswordOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UserAuthOptionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: UserAuthOptionContext): void;
}
export declare class HashAuthOptionContext extends UserAuthOptionContext {
    _hashed: Token;
    userName(): UserNameContext;
    IDENTIFIED(): TerminalNode;
    BY(): TerminalNode;
    PASSWORD(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(ctx: UserAuthOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StringAuthOptionContext extends UserAuthOptionContext {
    userName(): UserNameContext;
    IDENTIFIED(): TerminalNode;
    BY(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    RETAIN(): TerminalNode | undefined;
    CURRENT(): TerminalNode | undefined;
    PASSWORD(): TerminalNode | undefined;
    constructor(ctx: UserAuthOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ModuleAuthOptionContext extends UserAuthOptionContext {
    userName(): UserNameContext;
    IDENTIFIED(): TerminalNode;
    authenticationRule(): AuthenticationRuleContext[];
    authenticationRule(i: number): AuthenticationRuleContext;
    WITH(): TerminalNode | undefined;
    VIA(): TerminalNode | undefined;
    OR(): TerminalNode[];
    OR(i: number): TerminalNode;
    constructor(ctx: UserAuthOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SimpleAuthOptionContext extends UserAuthOptionContext {
    userName(): UserNameContext;
    constructor(ctx: UserAuthOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AuthenticationRuleContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: AuthenticationRuleContext): void;
}
export declare class ModuleContext extends AuthenticationRuleContext {
    authPlugin(): AuthPluginContext;
    STRING_LITERAL(): TerminalNode | undefined;
    BY(): TerminalNode | undefined;
    USING(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    constructor(ctx: AuthenticationRuleContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PasswordModuleOptionContext extends AuthenticationRuleContext {
    authPlugin(): AuthPluginContext;
    passwordFunctionClause(): PasswordFunctionClauseContext;
    USING(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    constructor(ctx: AuthenticationRuleContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TlsOptionContext extends ParserRuleContext {
    SSL(): TerminalNode | undefined;
    X509(): TerminalNode | undefined;
    CIPHER(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    ISSUER(): TerminalNode | undefined;
    SUBJECT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UserResourceOptionContext extends ParserRuleContext {
    MAX_QUERIES_PER_HOUR(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext;
    MAX_UPDATES_PER_HOUR(): TerminalNode | undefined;
    MAX_CONNECTIONS_PER_HOUR(): TerminalNode | undefined;
    MAX_USER_CONNECTIONS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UserPasswordOptionContext extends ParserRuleContext {
    _expireType: Token;
    PASSWORD(): TerminalNode | undefined;
    EXPIRE(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    DAY(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    NEVER(): TerminalNode | undefined;
    INTERVAL(): TerminalNode | undefined;
    HISTORY(): TerminalNode | undefined;
    REUSE(): TerminalNode | undefined;
    REQUIRE(): TerminalNode | undefined;
    CURRENT(): TerminalNode | undefined;
    OPTIONAL(): TerminalNode | undefined;
    FAILED_LOGIN_ATTEMPTS(): TerminalNode | undefined;
    PASSWORD_LOCK_TIME(): TerminalNode | undefined;
    UNBOUNDED(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UserLockOptionContext extends ParserRuleContext {
    _lockType: Token;
    ACCOUNT(): TerminalNode;
    LOCK(): TerminalNode | undefined;
    UNLOCK(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PrivelegeClauseContext extends ParserRuleContext {
    privilege(): PrivilegeContext;
    LR_BRACKET(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PrivilegeContext extends ParserRuleContext {
    ALL(): TerminalNode | undefined;
    PRIVILEGES(): TerminalNode | undefined;
    ALTER(): TerminalNode | undefined;
    ROUTINE(): TerminalNode | undefined;
    CREATE(): TerminalNode | undefined;
    TEMPORARY(): TerminalNode | undefined;
    TABLES(): TerminalNode | undefined;
    VIEW(): TerminalNode | undefined;
    USER(): TerminalNode | undefined;
    TABLESPACE(): TerminalNode | undefined;
    ROLE(): TerminalNode | undefined;
    DELETE(): TerminalNode | undefined;
    DROP(): TerminalNode | undefined;
    EVENT(): TerminalNode | undefined;
    EXECUTE(): TerminalNode | undefined;
    FILE(): TerminalNode | undefined;
    GRANT(): TerminalNode | undefined;
    OPTION(): TerminalNode | undefined;
    INDEX(): TerminalNode | undefined;
    INSERT(): TerminalNode | undefined;
    LOCK(): TerminalNode | undefined;
    PROCESS(): TerminalNode | undefined;
    PROXY(): TerminalNode | undefined;
    REFERENCES(): TerminalNode | undefined;
    RELOAD(): TerminalNode | undefined;
    REPLICATION(): TerminalNode | undefined;
    CLIENT(): TerminalNode | undefined;
    SLAVE(): TerminalNode | undefined;
    REPLICA(): TerminalNode | undefined;
    MASTER(): TerminalNode | undefined;
    ADMIN(): TerminalNode | undefined;
    SELECT(): TerminalNode | undefined;
    SHOW(): TerminalNode | undefined;
    DATABASES(): TerminalNode | undefined;
    SCHEMAS(): TerminalNode | undefined;
    SHUTDOWN(): TerminalNode | undefined;
    SUPER(): TerminalNode | undefined;
    TRIGGER(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    USAGE(): TerminalNode | undefined;
    APPLICATION_PASSWORD_ADMIN(): TerminalNode | undefined;
    AUDIT_ADMIN(): TerminalNode | undefined;
    BACKUP_ADMIN(): TerminalNode | undefined;
    BINLOG_ADMIN(): TerminalNode | undefined;
    BINLOG_ENCRYPTION_ADMIN(): TerminalNode | undefined;
    CLONE_ADMIN(): TerminalNode | undefined;
    CONNECTION_ADMIN(): TerminalNode | undefined;
    ENCRYPTION_KEY_ADMIN(): TerminalNode | undefined;
    FIREWALL_ADMIN(): TerminalNode | undefined;
    FIREWALL_USER(): TerminalNode | undefined;
    FLUSH_OPTIMIZER_COSTS(): TerminalNode | undefined;
    FLUSH_STATUS(): TerminalNode | undefined;
    FLUSH_TABLES(): TerminalNode | undefined;
    FLUSH_USER_RESOURCES(): TerminalNode | undefined;
    GROUP_REPLICATION_ADMIN(): TerminalNode | undefined;
    INNODB_REDO_LOG_ARCHIVE(): TerminalNode | undefined;
    INNODB_REDO_LOG_ENABLE(): TerminalNode | undefined;
    NDB_STORED_USER(): TerminalNode | undefined;
    PASSWORDLESS_USER_ADMIN(): TerminalNode | undefined;
    PERSIST_RO_VARIABLES_ADMIN(): TerminalNode | undefined;
    REPLICATION_APPLIER(): TerminalNode | undefined;
    REPLICATION_SLAVE_ADMIN(): TerminalNode | undefined;
    RESOURCE_GROUP_ADMIN(): TerminalNode | undefined;
    RESOURCE_GROUP_USER(): TerminalNode | undefined;
    ROLE_ADMIN(): TerminalNode | undefined;
    SERVICE_CONNECTION_ADMIN(): TerminalNode | undefined;
    SESSION_VARIABLES_ADMIN(): TerminalNode | undefined;
    SET_USER_ID(): TerminalNode | undefined;
    SHOW_ROUTINE(): TerminalNode | undefined;
    SYSTEM_USER(): TerminalNode | undefined;
    SYSTEM_VARIABLES_ADMIN(): TerminalNode | undefined;
    TABLE_ENCRYPTION_ADMIN(): TerminalNode | undefined;
    VERSION_TOKEN_ADMIN(): TerminalNode | undefined;
    XA_RECOVER_ADMIN(): TerminalNode | undefined;
    BINLOG_MONITOR(): TerminalNode | undefined;
    BINLOG_REPLAY(): TerminalNode | undefined;
    FEDERATED_ADMIN(): TerminalNode | undefined;
    READ_ONLY_ADMIN(): TerminalNode | undefined;
    REPLICATION_MASTER_ADMIN(): TerminalNode | undefined;
    BINLOG(): TerminalNode | undefined;
    MONITOR(): TerminalNode | undefined;
    REPLAY(): TerminalNode | undefined;
    FEDERATED(): TerminalNode | undefined;
    READ(): TerminalNode | undefined;
    ONLY(): TerminalNode | undefined;
    READ_ONLY(): TerminalNode | undefined;
    CONNECTION(): TerminalNode | undefined;
    HISTORY(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    LOAD(): TerminalNode | undefined;
    FROM(): TerminalNode | undefined;
    S3(): TerminalNode | undefined;
    INTO(): TerminalNode | undefined;
    INVOKE(): TerminalNode | undefined;
    LAMBDA(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PrivilegeLevelContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PrivilegeLevelContext): void;
}
export declare class CurrentSchemaPriviLevelContext extends PrivilegeLevelContext {
    STAR(): TerminalNode;
    constructor(ctx: PrivilegeLevelContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class GlobalPrivLevelContext extends PrivilegeLevelContext {
    STAR(): TerminalNode[];
    STAR(i: number): TerminalNode;
    DOT(): TerminalNode;
    constructor(ctx: PrivilegeLevelContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DefiniteSchemaPrivLevelContext extends PrivilegeLevelContext {
    uid(): UidContext;
    DOT(): TerminalNode;
    STAR(): TerminalNode;
    constructor(ctx: PrivilegeLevelContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DefiniteFullTablePrivLevelContext extends PrivilegeLevelContext {
    uid(): UidContext[];
    uid(i: number): UidContext;
    DOT(): TerminalNode;
    constructor(ctx: PrivilegeLevelContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DefiniteFullTablePrivLevel2Context extends PrivilegeLevelContext {
    uid(): UidContext;
    dottedId(): DottedIdContext;
    constructor(ctx: PrivilegeLevelContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DefiniteTablePrivLevelContext extends PrivilegeLevelContext {
    uid(): UidContext;
    constructor(ctx: PrivilegeLevelContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RenameUserClauseContext extends ParserRuleContext {
    _fromFirst: UserNameContext;
    _toFirst: UserNameContext;
    TO(): TerminalNode;
    userName(): UserNameContext[];
    userName(i: number): UserNameContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AnalyzeTableContext extends ParserRuleContext {
    _actionOption: Token;
    ANALYZE(): TerminalNode;
    tables(): TablesContext;
    TABLE(): TerminalNode | undefined;
    TABLES(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    HISTOGRAM(): TerminalNode[];
    HISTOGRAM(i: number): TerminalNode;
    ON(): TerminalNode[];
    ON(i: number): TerminalNode;
    fullColumnName(): FullColumnNameContext[];
    fullColumnName(i: number): FullColumnNameContext;
    DROP(): TerminalNode | undefined;
    NO_WRITE_TO_BINLOG(): TerminalNode | undefined;
    LOCAL(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    WITH(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    BUCKETS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CheckTableContext extends ParserRuleContext {
    CHECK(): TerminalNode;
    TABLE(): TerminalNode;
    tables(): TablesContext;
    checkTableOption(): CheckTableOptionContext[];
    checkTableOption(i: number): CheckTableOptionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ChecksumTableContext extends ParserRuleContext {
    _actionOption: Token;
    CHECKSUM(): TerminalNode;
    TABLE(): TerminalNode;
    tables(): TablesContext;
    QUICK(): TerminalNode | undefined;
    EXTENDED(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class OptimizeTableContext extends ParserRuleContext {
    _actionOption: Token;
    OPTIMIZE(): TerminalNode;
    tables(): TablesContext;
    TABLE(): TerminalNode | undefined;
    TABLES(): TerminalNode | undefined;
    waitNowaitClause(): WaitNowaitClauseContext | undefined;
    NO_WRITE_TO_BINLOG(): TerminalNode | undefined;
    LOCAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RepairTableContext extends ParserRuleContext {
    _actionOption: Token;
    REPAIR(): TerminalNode;
    TABLE(): TerminalNode;
    tables(): TablesContext;
    QUICK(): TerminalNode | undefined;
    EXTENDED(): TerminalNode | undefined;
    USE_FRM(): TerminalNode | undefined;
    NO_WRITE_TO_BINLOG(): TerminalNode | undefined;
    LOCAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CheckTableOptionContext extends ParserRuleContext {
    FOR(): TerminalNode | undefined;
    UPGRADE(): TerminalNode | undefined;
    QUICK(): TerminalNode | undefined;
    FAST(): TerminalNode | undefined;
    MEDIUM(): TerminalNode | undefined;
    EXTENDED(): TerminalNode | undefined;
    CHANGED(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CreateUdfunctionContext extends ParserRuleContext {
    _returnType: Token;
    CREATE(): TerminalNode;
    FUNCTION(): TerminalNode;
    uid(): UidContext;
    RETURNS(): TerminalNode;
    SONAME(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    STRING(): TerminalNode | undefined;
    INTEGER(): TerminalNode | undefined;
    REAL(): TerminalNode | undefined;
    DECIMAL(): TerminalNode | undefined;
    orReplace(): OrReplaceContext | undefined;
    AGGREGATE(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class InstallPluginContext extends ParserRuleContext {
    INSTALL(): TerminalNode;
    PLUGIN(): TerminalNode;
    uid(): UidContext;
    SONAME(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UninstallPluginContext extends ParserRuleContext {
    UNINSTALL(): TerminalNode;
    PLUGIN(): TerminalNode;
    uid(): UidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetStatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SetStatementContext): void;
}
export declare class SetVariableContext extends SetStatementContext {
    SET(): TerminalNode;
    variableClause(): VariableClauseContext[];
    variableClause(i: number): VariableClauseContext;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    VAR_ASSIGN(): TerminalNode[];
    VAR_ASSIGN(i: number): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    ON(): TerminalNode[];
    ON(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: SetStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetCharsetContext extends SetStatementContext {
    SET(): TerminalNode;
    charSet(): CharSetContext;
    charsetName(): CharsetNameContext | undefined;
    DEFAULT(): TerminalNode | undefined;
    constructor(ctx: SetStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetNamesContext extends SetStatementContext {
    SET(): TerminalNode;
    NAMES(): TerminalNode;
    charsetName(): CharsetNameContext | undefined;
    DEFAULT(): TerminalNode | undefined;
    COLLATE(): TerminalNode | undefined;
    collationName(): CollationNameContext | undefined;
    constructor(ctx: SetStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetPasswordContext extends SetStatementContext {
    setPasswordStatement(): SetPasswordStatementContext;
    constructor(ctx: SetStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetTransactionContext extends SetStatementContext {
    setTransactionStatement(): SetTransactionStatementContext;
    constructor(ctx: SetStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetAutocommitContext extends SetStatementContext {
    setAutocommitStatement(): SetAutocommitStatementContext;
    constructor(ctx: SetStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SetNewValueInsideTriggerContext extends SetStatementContext {
    SET(): TerminalNode;
    fullId(): FullIdContext[];
    fullId(i: number): FullIdContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    VAR_ASSIGN(): TerminalNode[];
    VAR_ASSIGN(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: SetStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowStatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ShowStatementContext): void;
}
export declare class ShowMasterLogsContext extends ShowStatementContext {
    _logFormat: Token;
    SHOW(): TerminalNode;
    LOGS(): TerminalNode;
    BINARY(): TerminalNode | undefined;
    MASTER(): TerminalNode | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowBinLogEventsContext extends ShowStatementContext {
    _filename: Token;
    _fromPosition: DecimalLiteralContext;
    SHOW(): TerminalNode;
    BINLOG(): TerminalNode;
    EVENTS(): TerminalNode;
    IN(): TerminalNode | undefined;
    FROM(): TerminalNode | undefined;
    limitClause(): LimitClauseContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowRelayLogEventsContext extends ShowStatementContext {
    _connectionName: Token;
    _filename: Token;
    _fromPosition: DecimalLiteralContext;
    _channelName: Token;
    SHOW(): TerminalNode;
    RELAYLOG(): TerminalNode;
    EVENTS(): TerminalNode;
    IN(): TerminalNode | undefined;
    FROM(): TerminalNode | undefined;
    limitClause(): LimitClauseContext | undefined;
    FOR(): TerminalNode | undefined;
    CHANNEL(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode[];
    STRING_LITERAL(i: number): TerminalNode;
    decimalLiteral(): DecimalLiteralContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowObjectFilterContext extends ShowStatementContext {
    SHOW(): TerminalNode;
    showCommonEntity(): ShowCommonEntityContext;
    showFilter(): ShowFilterContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowColumnsContext extends ShowStatementContext {
    _columnsFormat: Token;
    _tableFormat: Token;
    _schemaFormat: Token;
    SHOW(): TerminalNode;
    tableName(): TableNameContext;
    COLUMNS(): TerminalNode | undefined;
    FIELDS(): TerminalNode | undefined;
    FROM(): TerminalNode[];
    FROM(i: number): TerminalNode;
    IN(): TerminalNode[];
    IN(i: number): TerminalNode;
    FULL(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    showFilter(): ShowFilterContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowCreateDbContext extends ShowStatementContext {
    _schemaFormat: Token;
    SHOW(): TerminalNode;
    CREATE(): TerminalNode;
    uid(): UidContext;
    DATABASE(): TerminalNode | undefined;
    SCHEMA(): TerminalNode | undefined;
    ifNotExists(): IfNotExistsContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowCreateFullIdObjectContext extends ShowStatementContext {
    _namedEntity: Token;
    SHOW(): TerminalNode;
    CREATE(): TerminalNode;
    fullId(): FullIdContext;
    EVENT(): TerminalNode | undefined;
    FUNCTION(): TerminalNode | undefined;
    PROCEDURE(): TerminalNode | undefined;
    SEQUENCE(): TerminalNode | undefined;
    TABLE(): TerminalNode | undefined;
    TRIGGER(): TerminalNode | undefined;
    VIEW(): TerminalNode | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowCreatePackageContext extends ShowStatementContext {
    SHOW(): TerminalNode;
    CREATE(): TerminalNode;
    PACKAGE(): TerminalNode;
    fullId(): FullIdContext;
    BODY(): TerminalNode | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowCreateUserContext extends ShowStatementContext {
    SHOW(): TerminalNode;
    CREATE(): TerminalNode;
    USER(): TerminalNode;
    userName(): UserNameContext;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowEngineContext extends ShowStatementContext {
    _engineOption: Token;
    SHOW(): TerminalNode;
    ENGINE(): TerminalNode;
    engineName(): EngineNameContext;
    STATUS(): TerminalNode | undefined;
    MUTEX(): TerminalNode | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowInnoDBStatusContext extends ShowStatementContext {
    SHOW(): TerminalNode;
    INNODB(): TerminalNode;
    STATUS(): TerminalNode;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowGlobalInfoContext extends ShowStatementContext {
    SHOW(): TerminalNode;
    showGlobalInfoClause(): ShowGlobalInfoClauseContext;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowErrorsContext extends ShowStatementContext {
    _errorFormat: Token;
    SHOW(): TerminalNode;
    ERRORS(): TerminalNode | undefined;
    WARNINGS(): TerminalNode | undefined;
    limitClause(): LimitClauseContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowCountErrorsContext extends ShowStatementContext {
    _errorFormat: Token;
    SHOW(): TerminalNode;
    COUNT(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    STAR(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    ERRORS(): TerminalNode | undefined;
    WARNINGS(): TerminalNode | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowSchemaFilterContext extends ShowStatementContext {
    _schemaFormat: Token;
    SHOW(): TerminalNode;
    showSchemaEntity(): ShowSchemaEntityContext;
    uid(): UidContext | undefined;
    showFilter(): ShowFilterContext | undefined;
    FROM(): TerminalNode | undefined;
    IN(): TerminalNode | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowRoutineContext extends ShowStatementContext {
    _routine: Token;
    SHOW(): TerminalNode;
    CODE(): TerminalNode;
    fullId(): FullIdContext;
    FUNCTION(): TerminalNode | undefined;
    PROCEDURE(): TerminalNode | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowGrantsContext extends ShowStatementContext {
    SHOW(): TerminalNode;
    GRANTS(): TerminalNode;
    FOR(): TerminalNode | undefined;
    userName(): UserNameContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowIndexesContext extends ShowStatementContext {
    _indexFormat: Token;
    _tableFormat: Token;
    _schemaFormat: Token;
    SHOW(): TerminalNode;
    tableName(): TableNameContext;
    INDEX(): TerminalNode | undefined;
    INDEXES(): TerminalNode | undefined;
    KEYS(): TerminalNode | undefined;
    FROM(): TerminalNode[];
    FROM(i: number): TerminalNode;
    IN(): TerminalNode[];
    IN(i: number): TerminalNode;
    uid(): UidContext | undefined;
    WHERE(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowOpenTablesContext extends ShowStatementContext {
    _schemaFormat: Token;
    SHOW(): TerminalNode;
    OPEN(): TerminalNode;
    TABLES(): TerminalNode;
    fullId(): FullIdContext | undefined;
    showFilter(): ShowFilterContext | undefined;
    FROM(): TerminalNode | undefined;
    IN(): TerminalNode | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowProfileContext extends ShowStatementContext {
    _queryCount: DecimalLiteralContext;
    SHOW(): TerminalNode;
    PROFILE(): TerminalNode;
    showProfileType(): ShowProfileTypeContext[];
    showProfileType(i: number): ShowProfileTypeContext;
    FOR(): TerminalNode | undefined;
    QUERY(): TerminalNode | undefined;
    limitClause(): LimitClauseContext | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowSlaveStatusContext extends ShowStatementContext {
    _connectionName: Token;
    _channelName: Token;
    SHOW(): TerminalNode;
    STATUS(): TerminalNode;
    SLAVE(): TerminalNode | undefined;
    REPLICA(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    CHANNEL(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode[];
    STRING_LITERAL(i: number): TerminalNode;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowUserstatPluginContext extends ShowStatementContext {
    SHOW(): TerminalNode;
    USER_STATISTICS(): TerminalNode | undefined;
    CLIENT_STATISTICS(): TerminalNode | undefined;
    INDEX_STATISTICS(): TerminalNode | undefined;
    TABLE_STATISTICS(): TerminalNode | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowExplainContext extends ShowStatementContext {
    SHOW(): TerminalNode;
    EXPLAIN(): TerminalNode;
    FOR(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    formatJsonStatement(): FormatJsonStatementContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowPackageStatusContext extends ShowStatementContext {
    SHOW(): TerminalNode;
    PACKAGE(): TerminalNode;
    STATUS(): TerminalNode;
    BODY(): TerminalNode | undefined;
    showFilter(): ShowFilterContext | undefined;
    constructor(ctx: ShowStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExplainStatementContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExplainStatementContext): void;
}
export declare class ExplainForConnectionContext extends ExplainStatementContext {
    EXPLAIN(): TerminalNode;
    FOR(): TerminalNode;
    CONNECTION(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    formatJsonStatement(): FormatJsonStatementContext | undefined;
    constructor(ctx: ExplainStatementContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class VariableClauseContext extends ParserRuleContext {
    LOCAL_ID(): TerminalNode | undefined;
    GLOBAL_ID(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    GLOBAL(): TerminalNode | undefined;
    SESSION(): TerminalNode | undefined;
    LOCAL(): TerminalNode | undefined;
    AT_SIGN(): TerminalNode[];
    AT_SIGN(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowCommonEntityContext extends ParserRuleContext {
    CHARACTER(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    COLLATION(): TerminalNode | undefined;
    DATABASES(): TerminalNode | undefined;
    SCHEMAS(): TerminalNode | undefined;
    FUNCTION(): TerminalNode | undefined;
    STATUS(): TerminalNode | undefined;
    PROCEDURE(): TerminalNode | undefined;
    VARIABLES(): TerminalNode | undefined;
    GLOBAL(): TerminalNode | undefined;
    SESSION(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowFilterContext extends ParserRuleContext {
    LIKE(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    WHERE(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowGlobalInfoClauseContext extends ParserRuleContext {
    ENGINES(): TerminalNode | undefined;
    STORAGE(): TerminalNode | undefined;
    STATUS(): TerminalNode | undefined;
    MASTER(): TerminalNode | undefined;
    BINLOG(): TerminalNode | undefined;
    PLUGINS(): TerminalNode | undefined;
    SONAME(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    showFilter(): ShowFilterContext | undefined;
    PRIVILEGES(): TerminalNode | undefined;
    PROCESSLIST(): TerminalNode | undefined;
    FULL(): TerminalNode | undefined;
    PROFILES(): TerminalNode | undefined;
    LOCALES(): TerminalNode | undefined;
    HOSTS(): TerminalNode | undefined;
    SLAVE(): TerminalNode | undefined;
    REPLICA(): TerminalNode | undefined;
    AUTHORS(): TerminalNode | undefined;
    CONTRIBUTORS(): TerminalNode | undefined;
    QUERY_RESPONSE_TIME(): TerminalNode | undefined;
    ALL(): TerminalNode | undefined;
    SLAVES(): TerminalNode | undefined;
    REPLICAS(): TerminalNode | undefined;
    WSREP_MEMBERSHIP(): TerminalNode | undefined;
    WSREP_STATUS(): TerminalNode | undefined;
    TABLE(): TerminalNode | undefined;
    TYPES(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowSchemaEntityContext extends ParserRuleContext {
    EVENTS(): TerminalNode | undefined;
    TABLE(): TerminalNode | undefined;
    STATUS(): TerminalNode | undefined;
    TABLES(): TerminalNode | undefined;
    FULL(): TerminalNode | undefined;
    TRIGGERS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShowProfileTypeContext extends ParserRuleContext {
    ALL(): TerminalNode | undefined;
    BLOCK(): TerminalNode | undefined;
    IO(): TerminalNode | undefined;
    CONTEXT(): TerminalNode | undefined;
    SWITCHES(): TerminalNode | undefined;
    CPU(): TerminalNode | undefined;
    IPC(): TerminalNode | undefined;
    MEMORY(): TerminalNode | undefined;
    PAGE(): TerminalNode | undefined;
    FAULTS(): TerminalNode | undefined;
    SOURCE(): TerminalNode | undefined;
    SWAPS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BinlogStatementContext extends ParserRuleContext {
    BINLOG(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CacheIndexStatementContext extends ParserRuleContext {
    _schema: UidContext;
    CACHE(): TerminalNode;
    INDEX(): TerminalNode;
    tableIndexes(): TableIndexesContext[];
    tableIndexes(i: number): TableIndexesContext;
    IN(): TerminalNode;
    uid(): UidContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    PARTITION(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    ALL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FlushStatementContext extends ParserRuleContext {
    _flushFormat: Token;
    FLUSH(): TerminalNode;
    flushOption(): FlushOptionContext[];
    flushOption(i: number): FlushOptionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    NO_WRITE_TO_BINLOG(): TerminalNode | undefined;
    LOCAL(): TerminalNode | undefined;
    USER_STATISTICS(): TerminalNode | undefined;
    CLIENT_STATISTICS(): TerminalNode | undefined;
    INDEX_STATISTICS(): TerminalNode | undefined;
    TABLE_STATISTICS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class KillStatementContext extends ParserRuleContext {
    _connectionFormat: Token;
    KILL(): TerminalNode;
    expression(): ExpressionContext;
    CONNECTION(): TerminalNode | undefined;
    QUERY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LoadIndexIntoCacheContext extends ParserRuleContext {
    LOAD(): TerminalNode;
    INDEX(): TerminalNode;
    INTO(): TerminalNode;
    CACHE(): TerminalNode;
    loadedTableIndexes(): LoadedTableIndexesContext[];
    loadedTableIndexes(i: number): LoadedTableIndexesContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ResetStatementContext extends ParserRuleContext {
    RESET(): TerminalNode;
    QUERY(): TerminalNode;
    CACHE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ShutdownStatementContext extends ParserRuleContext {
    SHUTDOWN(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableIndexesContext extends ParserRuleContext {
    _indexFormat: Token;
    tableName(): TableNameContext;
    LR_BRACKET(): TerminalNode | undefined;
    uidList(): UidListContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FlushOptionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FlushOptionContext): void;
}
export declare class SimpleFlushOptionContext extends FlushOptionContext {
    DES_KEY_FILE(): TerminalNode | undefined;
    HOSTS(): TerminalNode | undefined;
    LOGS(): TerminalNode | undefined;
    OPTIMIZER_COSTS(): TerminalNode | undefined;
    PRIVILEGES(): TerminalNode | undefined;
    QUERY(): TerminalNode | undefined;
    CACHE(): TerminalNode | undefined;
    STATUS(): TerminalNode | undefined;
    USER_RESOURCES(): TerminalNode | undefined;
    TABLES(): TerminalNode | undefined;
    WITH(): TerminalNode | undefined;
    READ(): TerminalNode | undefined;
    LOCK(): TerminalNode | undefined;
    BINARY(): TerminalNode | undefined;
    ENGINE(): TerminalNode | undefined;
    ERROR(): TerminalNode | undefined;
    GENERAL(): TerminalNode | undefined;
    RELAY(): TerminalNode | undefined;
    SLOW(): TerminalNode | undefined;
    constructor(ctx: FlushOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ChannelFlushOptionContext extends FlushOptionContext {
    RELAY(): TerminalNode;
    LOGS(): TerminalNode;
    channelOption(): ChannelOptionContext | undefined;
    constructor(ctx: FlushOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableFlushOptionContext extends FlushOptionContext {
    TABLE(): TerminalNode | undefined;
    TABLES(): TerminalNode | undefined;
    tables(): TablesContext | undefined;
    flushTableOption(): FlushTableOptionContext | undefined;
    constructor(ctx: FlushOptionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FlushTableOptionContext extends ParserRuleContext {
    WITH(): TerminalNode | undefined;
    READ(): TerminalNode | undefined;
    LOCK(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    EXPORT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LoadedTableIndexesContext extends ParserRuleContext {
    _partitionList: UidListContext;
    _indexFormat: Token;
    _indexList: UidListContext;
    tableName(): TableNameContext;
    PARTITION(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    IGNORE(): TerminalNode | undefined;
    LEAVES(): TerminalNode | undefined;
    uidList(): UidListContext[];
    uidList(i: number): UidListContext;
    ALL(): TerminalNode | undefined;
    INDEX(): TerminalNode | undefined;
    KEY(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SimpleDescribeStatementContext extends ParserRuleContext {
    _command: Token;
    _column: UidContext;
    _pattern: Token;
    tableName(): TableNameContext;
    EXPLAIN(): TerminalNode | undefined;
    DESCRIBE(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FullDescribeStatementContext extends ParserRuleContext {
    _command: Token;
    _formatType: Token;
    _formatValue: Token;
    describeObjectClause(): DescribeObjectClauseContext;
    EXPLAIN(): TerminalNode | undefined;
    DESCRIBE(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    EQUAL_SYMBOL(): TerminalNode | undefined;
    EXTENDED(): TerminalNode | undefined;
    PARTITIONS(): TerminalNode | undefined;
    FORMAT(): TerminalNode | undefined;
    TRADITIONAL(): TerminalNode | undefined;
    JSON(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FormatJsonStatementContext extends ParserRuleContext {
    _formatValue: Token;
    FORMAT(): TerminalNode;
    EQUAL_SYMBOL(): TerminalNode;
    JSON(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HelpStatementContext extends ParserRuleContext {
    HELP(): TerminalNode;
    STRING_LITERAL(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UseStatementContext extends ParserRuleContext {
    USE(): TerminalNode;
    uid(): UidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SignalStatementContext extends ParserRuleContext {
    SIGNAL(): TerminalNode;
    ID(): TerminalNode | undefined;
    REVERSE_QUOTE_ID(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    signalConditionInformation(): SignalConditionInformationContext[];
    signalConditionInformation(i: number): SignalConditionInformationContext;
    SQLSTATE(): TerminalNode | undefined;
    stringLiteral(): StringLiteralContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    VALUE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ResignalStatementContext extends ParserRuleContext {
    RESIGNAL(): TerminalNode;
    ID(): TerminalNode | undefined;
    REVERSE_QUOTE_ID(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    signalConditionInformation(): SignalConditionInformationContext[];
    signalConditionInformation(i: number): SignalConditionInformationContext;
    SQLSTATE(): TerminalNode | undefined;
    stringLiteral(): StringLiteralContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    VALUE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SignalConditionInformationContext extends ParserRuleContext {
    EQUAL_SYMBOL(): TerminalNode;
    CLASS_ORIGIN(): TerminalNode | undefined;
    SUBCLASS_ORIGIN(): TerminalNode | undefined;
    MESSAGE_TEXT(): TerminalNode | undefined;
    MYSQL_ERRNO(): TerminalNode | undefined;
    CONSTRAINT_CATALOG(): TerminalNode | undefined;
    CONSTRAINT_SCHEMA(): TerminalNode | undefined;
    CONSTRAINT_NAME(): TerminalNode | undefined;
    CATALOG_NAME(): TerminalNode | undefined;
    SCHEMA_NAME(): TerminalNode | undefined;
    TABLE_NAME(): TerminalNode | undefined;
    COLUMN_NAME(): TerminalNode | undefined;
    CURSOR_NAME(): TerminalNode | undefined;
    stringLiteral(): StringLiteralContext | undefined;
    DECIMAL_LITERAL(): TerminalNode | undefined;
    mysqlVariable(): MysqlVariableContext | undefined;
    simpleId(): SimpleIdContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DiagnosticsStatementContext extends ParserRuleContext {
    GET(): TerminalNode;
    DIAGNOSTICS(): TerminalNode;
    CURRENT(): TerminalNode | undefined;
    STACKED(): TerminalNode | undefined;
    variableClause(): VariableClauseContext[];
    variableClause(i: number): VariableClauseContext;
    EQUAL_SYMBOL(): TerminalNode[];
    EQUAL_SYMBOL(i: number): TerminalNode;
    CONDITION(): TerminalNode | undefined;
    diagnosticsConditionInformationName(): DiagnosticsConditionInformationNameContext[];
    diagnosticsConditionInformationName(i: number): DiagnosticsConditionInformationNameContext;
    NUMBER(): TerminalNode[];
    NUMBER(i: number): TerminalNode;
    ROW_COUNT(): TerminalNode[];
    ROW_COUNT(i: number): TerminalNode;
    decimalLiteral(): DecimalLiteralContext | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DiagnosticsConditionInformationNameContext extends ParserRuleContext {
    CLASS_ORIGIN(): TerminalNode | undefined;
    SUBCLASS_ORIGIN(): TerminalNode | undefined;
    RETURNED_SQLSTATE(): TerminalNode | undefined;
    MESSAGE_TEXT(): TerminalNode | undefined;
    MYSQL_ERRNO(): TerminalNode | undefined;
    CONSTRAINT_CATALOG(): TerminalNode | undefined;
    CONSTRAINT_SCHEMA(): TerminalNode | undefined;
    CONSTRAINT_NAME(): TerminalNode | undefined;
    CATALOG_NAME(): TerminalNode | undefined;
    SCHEMA_NAME(): TerminalNode | undefined;
    TABLE_NAME(): TerminalNode | undefined;
    COLUMN_NAME(): TerminalNode | undefined;
    CURSOR_NAME(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DescribeObjectClauseContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DescribeObjectClauseContext): void;
}
export declare class DescribeStatementsContext extends DescribeObjectClauseContext {
    selectStatement(): SelectStatementContext | undefined;
    deleteStatement(): DeleteStatementContext | undefined;
    insertStatement(): InsertStatementContext | undefined;
    replaceStatement(): ReplaceStatementContext | undefined;
    updateStatement(): UpdateStatementContext | undefined;
    constructor(ctx: DescribeObjectClauseContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DescribeConnectionContext extends DescribeObjectClauseContext {
    FOR(): TerminalNode;
    CONNECTION(): TerminalNode;
    uid(): UidContext;
    constructor(ctx: DescribeObjectClauseContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FullIdContext extends ParserRuleContext {
    uid(): UidContext[];
    uid(i: number): UidContext;
    DOT_ID(): TerminalNode | undefined;
    DOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TableNameContext extends ParserRuleContext {
    fullId(): FullIdContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RoleNameContext extends ParserRuleContext {
    userName(): UserNameContext | undefined;
    uid(): UidContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FullColumnNameContext extends ParserRuleContext {
    uid(): UidContext | undefined;
    dottedId(): DottedIdContext[];
    dottedId(i: number): DottedIdContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IndexColumnNameContext extends ParserRuleContext {
    _sortType: Token;
    expression(): ExpressionContext | undefined;
    uid(): UidContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    ASC(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UserNameContext extends ParserRuleContext {
    STRING_USER_NAME(): TerminalNode | undefined;
    STRING_USER_NAME_MARIADB(): TerminalNode | undefined;
    ID(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    ADMIN(): TerminalNode | undefined;
    keywordsCanBeId(): KeywordsCanBeIdContext | undefined;
    currentUserExpression(): CurrentUserExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MysqlVariableContext extends ParserRuleContext {
    LOCAL_ID(): TerminalNode | undefined;
    GLOBAL_ID(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CharsetNameContext extends ParserRuleContext {
    BINARY(): TerminalNode | undefined;
    charsetNameBase(): CharsetNameBaseContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    CHARSET_REVERSE_QOUTE_STRING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CollationNameContext extends ParserRuleContext {
    uid(): UidContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class EngineNameContext extends ParserRuleContext {
    engineNameBase(): EngineNameBaseContext | undefined;
    ID(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class EngineNameBaseContext extends ParserRuleContext {
    ARCHIVE(): TerminalNode | undefined;
    BLACKHOLE(): TerminalNode | undefined;
    CONNECT(): TerminalNode | undefined;
    CSV(): TerminalNode | undefined;
    FEDERATED(): TerminalNode | undefined;
    INNODB(): TerminalNode | undefined;
    MEMORY(): TerminalNode | undefined;
    MRG_MYISAM(): TerminalNode | undefined;
    MYISAM(): TerminalNode | undefined;
    NDB(): TerminalNode | undefined;
    NDBCLUSTER(): TerminalNode | undefined;
    PERFORMANCE_SCHEMA(): TerminalNode | undefined;
    TOKUDB(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class EncryptedLiteralContext extends ParserRuleContext {
    ENCRYPTED(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UuidSetContext extends ParserRuleContext {
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext;
    MINUS(): TerminalNode[];
    MINUS(i: number): TerminalNode;
    COLON_SYMB(): TerminalNode[];
    COLON_SYMB(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class XidContext extends ParserRuleContext {
    _globalTableUid: XuidStringIdContext;
    _qualifier: XuidStringIdContext;
    _idFormat: DecimalLiteralContext;
    xuidStringId(): XuidStringIdContext[];
    xuidStringId(i: number): XuidStringIdContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    decimalLiteral(): DecimalLiteralContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class XuidStringIdContext extends ParserRuleContext {
    STRING_LITERAL(): TerminalNode | undefined;
    BIT_STRING(): TerminalNode | undefined;
    HEXADECIMAL_LITERAL(): TerminalNode[];
    HEXADECIMAL_LITERAL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AuthPluginContext extends ParserRuleContext {
    uid(): UidContext | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UidContext extends ParserRuleContext {
    simpleId(): SimpleIdContext | undefined;
    CHARSET_REVERSE_QOUTE_STRING(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SimpleIdContext extends ParserRuleContext {
    ID(): TerminalNode | undefined;
    charsetNameBase(): CharsetNameBaseContext | undefined;
    transactionLevelBase(): TransactionLevelBaseContext | undefined;
    engineNameBase(): EngineNameBaseContext | undefined;
    privilegesBase(): PrivilegesBaseContext | undefined;
    intervalTypeBase(): IntervalTypeBaseContext | undefined;
    dataTypeBase(): DataTypeBaseContext | undefined;
    keywordsCanBeId(): KeywordsCanBeIdContext | undefined;
    scalarFunctionName(): ScalarFunctionNameContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DottedIdContext extends ParserRuleContext {
    DOT_ID(): TerminalNode | undefined;
    DOT(): TerminalNode | undefined;
    uid(): UidContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DecimalLiteralContext extends ParserRuleContext {
    DECIMAL_LITERAL(): TerminalNode | undefined;
    ZERO_DECIMAL(): TerminalNode | undefined;
    ONE_DECIMAL(): TerminalNode | undefined;
    TWO_DECIMAL(): TerminalNode | undefined;
    REAL_LITERAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FileSizeLiteralContext extends ParserRuleContext {
    FILESIZE_LITERAL(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class StringLiteralContext extends ParserRuleContext {
    STRING_LITERAL(): TerminalNode[];
    STRING_LITERAL(i: number): TerminalNode;
    START_NATIONAL_STRING_LITERAL(): TerminalNode | undefined;
    STRING_CHARSET_NAME(): TerminalNode | undefined;
    COLLATE(): TerminalNode | undefined;
    collationName(): CollationNameContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BooleanLiteralContext extends ParserRuleContext {
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class HexadecimalLiteralContext extends ParserRuleContext {
    HEXADECIMAL_LITERAL(): TerminalNode;
    STRING_CHARSET_NAME(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class NullNotnullContext extends ParserRuleContext {
    NULL_LITERAL(): TerminalNode | undefined;
    NULL_SPEC_LITERAL(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ConstantContext extends ParserRuleContext {
    _nullLiteral: Token;
    stringLiteral(): StringLiteralContext | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    MINUS(): TerminalNode | undefined;
    hexadecimalLiteral(): HexadecimalLiteralContext | undefined;
    booleanLiteral(): BooleanLiteralContext | undefined;
    REAL_LITERAL(): TerminalNode | undefined;
    BIT_STRING(): TerminalNode | undefined;
    NULL_LITERAL(): TerminalNode | undefined;
    NULL_SPEC_LITERAL(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DataTypeContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: DataTypeContext): void;
}
export declare class StringDataTypeContext extends DataTypeContext {
    _typeName: Token;
    CHAR(): TerminalNode | undefined;
    CHARACTER(): TerminalNode | undefined;
    VARCHAR(): TerminalNode | undefined;
    TINYTEXT(): TerminalNode | undefined;
    TEXT(): TerminalNode | undefined;
    MEDIUMTEXT(): TerminalNode | undefined;
    LONGTEXT(): TerminalNode | undefined;
    NCHAR(): TerminalNode | undefined;
    NVARCHAR(): TerminalNode | undefined;
    LONG(): TerminalNode | undefined;
    VARYING(): TerminalNode | undefined;
    lengthOneDimension(): LengthOneDimensionContext | undefined;
    BINARY(): TerminalNode[];
    BINARY(i: number): TerminalNode;
    charSet(): CharSetContext | undefined;
    charsetName(): CharsetNameContext | undefined;
    COLLATE(): TerminalNode | undefined;
    collationName(): CollationNameContext | undefined;
    constructor(ctx: DataTypeContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class NationalStringDataTypeContext extends DataTypeContext {
    _typeName: Token;
    NATIONAL(): TerminalNode | undefined;
    VARCHAR(): TerminalNode | undefined;
    CHARACTER(): TerminalNode | undefined;
    lengthOneDimension(): LengthOneDimensionContext | undefined;
    BINARY(): TerminalNode | undefined;
    NCHAR(): TerminalNode | undefined;
    constructor(ctx: DataTypeContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class NationalVaryingStringDataTypeContext extends DataTypeContext {
    _typeName: Token;
    NATIONAL(): TerminalNode;
    VARYING(): TerminalNode;
    CHAR(): TerminalNode | undefined;
    CHARACTER(): TerminalNode | undefined;
    lengthOneDimension(): LengthOneDimensionContext | undefined;
    BINARY(): TerminalNode | undefined;
    constructor(ctx: DataTypeContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DimensionDataTypeContext extends DataTypeContext {
    _typeName: Token;
    TINYINT(): TerminalNode | undefined;
    SMALLINT(): TerminalNode | undefined;
    MEDIUMINT(): TerminalNode | undefined;
    INT(): TerminalNode | undefined;
    INTEGER(): TerminalNode | undefined;
    BIGINT(): TerminalNode | undefined;
    MIDDLEINT(): TerminalNode | undefined;
    INT1(): TerminalNode | undefined;
    INT2(): TerminalNode | undefined;
    INT3(): TerminalNode | undefined;
    INT4(): TerminalNode | undefined;
    INT8(): TerminalNode | undefined;
    lengthOneDimension(): LengthOneDimensionContext | undefined;
    SIGNED(): TerminalNode[];
    SIGNED(i: number): TerminalNode;
    UNSIGNED(): TerminalNode[];
    UNSIGNED(i: number): TerminalNode;
    ZEROFILL(): TerminalNode[];
    ZEROFILL(i: number): TerminalNode;
    REAL(): TerminalNode | undefined;
    lengthTwoDimension(): LengthTwoDimensionContext | undefined;
    DOUBLE(): TerminalNode | undefined;
    PRECISION(): TerminalNode | undefined;
    DECIMAL(): TerminalNode | undefined;
    DEC(): TerminalNode | undefined;
    FIXED(): TerminalNode | undefined;
    NUMERIC(): TerminalNode | undefined;
    FLOAT(): TerminalNode | undefined;
    FLOAT4(): TerminalNode | undefined;
    FLOAT8(): TerminalNode | undefined;
    lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | undefined;
    BIT(): TerminalNode | undefined;
    TIME(): TerminalNode | undefined;
    TIMESTAMP(): TerminalNode | undefined;
    DATETIME(): TerminalNode | undefined;
    BINARY(): TerminalNode | undefined;
    VARBINARY(): TerminalNode | undefined;
    BLOB(): TerminalNode | undefined;
    YEAR(): TerminalNode | undefined;
    constructor(ctx: DataTypeContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SimpleDataTypeContext extends DataTypeContext {
    _typeName: Token;
    DATE(): TerminalNode | undefined;
    TINYBLOB(): TerminalNode | undefined;
    MEDIUMBLOB(): TerminalNode | undefined;
    LONGBLOB(): TerminalNode | undefined;
    BOOL(): TerminalNode | undefined;
    BOOLEAN(): TerminalNode | undefined;
    SERIAL(): TerminalNode | undefined;
    constructor(ctx: DataTypeContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CollectionDataTypeContext extends DataTypeContext {
    _typeName: Token;
    collectionOptions(): CollectionOptionsContext;
    ENUM(): TerminalNode | undefined;
    SET(): TerminalNode | undefined;
    BINARY(): TerminalNode | undefined;
    charSet(): CharSetContext | undefined;
    charsetName(): CharsetNameContext | undefined;
    constructor(ctx: DataTypeContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SpatialDataTypeContext extends DataTypeContext {
    _typeName: Token;
    GEOMETRYCOLLECTION(): TerminalNode | undefined;
    GEOMCOLLECTION(): TerminalNode | undefined;
    LINESTRING(): TerminalNode | undefined;
    MULTILINESTRING(): TerminalNode | undefined;
    MULTIPOINT(): TerminalNode | undefined;
    MULTIPOLYGON(): TerminalNode | undefined;
    POINT(): TerminalNode | undefined;
    POLYGON(): TerminalNode | undefined;
    JSON(): TerminalNode | undefined;
    GEOMETRY(): TerminalNode | undefined;
    constructor(ctx: DataTypeContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LongVarcharDataTypeContext extends DataTypeContext {
    _typeName: Token;
    LONG(): TerminalNode;
    VARCHAR(): TerminalNode | undefined;
    BINARY(): TerminalNode | undefined;
    charSet(): CharSetContext | undefined;
    charsetName(): CharsetNameContext | undefined;
    COLLATE(): TerminalNode | undefined;
    collationName(): CollationNameContext | undefined;
    constructor(ctx: DataTypeContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LongVarbinaryDataTypeContext extends DataTypeContext {
    LONG(): TerminalNode;
    VARBINARY(): TerminalNode;
    constructor(ctx: DataTypeContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CollectionOptionsContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode;
    STRING_LITERAL(): TerminalNode[];
    STRING_LITERAL(i: number): TerminalNode;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ConvertedDataTypeContext extends ParserRuleContext {
    _typeName: Token;
    CHAR(): TerminalNode | undefined;
    DECIMAL(): TerminalNode | undefined;
    SIGNED(): TerminalNode | undefined;
    UNSIGNED(): TerminalNode | undefined;
    ARRAY(): TerminalNode | undefined;
    BINARY(): TerminalNode | undefined;
    NCHAR(): TerminalNode | undefined;
    DATE(): TerminalNode | undefined;
    DATETIME(): TerminalNode | undefined;
    TIME(): TerminalNode | undefined;
    JSON(): TerminalNode | undefined;
    INT(): TerminalNode | undefined;
    INTEGER(): TerminalNode | undefined;
    lengthOneDimension(): LengthOneDimensionContext | undefined;
    charSet(): CharSetContext | undefined;
    charsetName(): CharsetNameContext | undefined;
    lengthTwoOptionalDimension(): LengthTwoOptionalDimensionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LengthOneDimensionContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext;
    RR_BRACKET(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LengthTwoDimensionContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext;
    COMMA(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LengthTwoOptionalDimensionContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UidListContext extends ParserRuleContext {
    uid(): UidContext[];
    uid(i: number): UidContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TablesContext extends ParserRuleContext {
    tableName(): TableNameContext[];
    tableName(i: number): TableNameContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IndexColumnNamesContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode;
    indexColumnName(): IndexColumnNameContext[];
    indexColumnName(i: number): IndexColumnNameContext;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExpressionsContext extends ParserRuleContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExpressionsWithDefaultsContext extends ParserRuleContext {
    expressionOrDefault(): ExpressionOrDefaultContext[];
    expressionOrDefault(i: number): ExpressionOrDefaultContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ConstantsContext extends ParserRuleContext {
    constant(): ConstantContext[];
    constant(i: number): ConstantContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SimpleStringsContext extends ParserRuleContext {
    STRING_LITERAL(): TerminalNode[];
    STRING_LITERAL(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UserVariablesContext extends ParserRuleContext {
    LOCAL_ID(): TerminalNode[];
    LOCAL_ID(i: number): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DefaultValueContext extends ParserRuleContext {
    NULL_LITERAL(): TerminalNode | undefined;
    CAST(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    AS(): TerminalNode | undefined;
    convertedDataType(): ConvertedDataTypeContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    constant(): ConstantContext | undefined;
    unaryOperator(): UnaryOperatorContext | undefined;
    currentTimestamp(): CurrentTimestampContext[];
    currentTimestamp(i: number): CurrentTimestampContext;
    ON(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    fullId(): FullIdContext | undefined;
    LASTVAL(): TerminalNode | undefined;
    NEXTVAL(): TerminalNode | undefined;
    VALUE(): TerminalNode | undefined;
    FOR(): TerminalNode | undefined;
    PREVIOUS(): TerminalNode | undefined;
    NEXT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CurrentTimestampContext extends ParserRuleContext {
    NOW(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    CURRENT_TIMESTAMP(): TerminalNode | undefined;
    LOCALTIME(): TerminalNode | undefined;
    LOCALTIMESTAMP(): TerminalNode | undefined;
    CURDATE(): TerminalNode | undefined;
    CURTIME(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExpressionOrDefaultContext extends ParserRuleContext {
    expression(): ExpressionContext | undefined;
    DEFAULT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IfExistsContext extends ParserRuleContext {
    IF(): TerminalNode;
    EXISTS(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IfNotExistsContext extends ParserRuleContext {
    IF(): TerminalNode;
    NOT(): TerminalNode;
    EXISTS(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class OrReplaceContext extends ParserRuleContext {
    OR(): TerminalNode;
    REPLACE(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WaitNowaitClauseContext extends ParserRuleContext {
    WAIT(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    NOWAIT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LockOptionContext extends ParserRuleContext {
    waitNowaitClause(): WaitNowaitClauseContext | undefined;
    SKIP_(): TerminalNode | undefined;
    LOCKED(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FunctionCallContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: FunctionCallContext): void;
}
export declare class SpecificFunctionCallContext extends FunctionCallContext {
    specificFunction(): SpecificFunctionContext;
    constructor(ctx: FunctionCallContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AggregateFunctionCallContext extends FunctionCallContext {
    aggregateWindowedFunction(): AggregateWindowedFunctionContext;
    constructor(ctx: FunctionCallContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class NonAggregateFunctionCallContext extends FunctionCallContext {
    nonAggregateWindowedFunction(): NonAggregateWindowedFunctionContext;
    constructor(ctx: FunctionCallContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ScalarFunctionCallContext extends FunctionCallContext {
    scalarFunctionName(): ScalarFunctionNameContext;
    LR_BRACKET(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    functionArgs(): FunctionArgsContext | undefined;
    constructor(ctx: FunctionCallContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UdfFunctionCallContext extends FunctionCallContext {
    fullId(): FullIdContext;
    LR_BRACKET(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    functionArgs(): FunctionArgsContext | undefined;
    constructor(ctx: FunctionCallContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PasswordFunctionCallContext extends FunctionCallContext {
    passwordFunctionClause(): PasswordFunctionClauseContext;
    constructor(ctx: FunctionCallContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SpecificFunctionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: SpecificFunctionContext): void;
}
export declare class SimpleFunctionCallContext extends SpecificFunctionContext {
    CURRENT_DATE(): TerminalNode | undefined;
    CURRENT_TIME(): TerminalNode | undefined;
    CURRENT_TIMESTAMP(): TerminalNode | undefined;
    CURDATE(): TerminalNode | undefined;
    CURTIME(): TerminalNode | undefined;
    CURRENT_USER(): TerminalNode | undefined;
    LOCALTIME(): TerminalNode | undefined;
    UTC_TIMESTAMP(): TerminalNode | undefined;
    SCHEMA(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DataTypeFunctionCallContext extends SpecificFunctionContext {
    _separator: Token;
    CONVERT(): TerminalNode | undefined;
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext;
    convertedDataType(): ConvertedDataTypeContext | undefined;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode | undefined;
    USING(): TerminalNode | undefined;
    charsetName(): CharsetNameContext | undefined;
    CAST(): TerminalNode | undefined;
    AS(): TerminalNode | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ValuesFunctionCallContext extends SpecificFunctionContext {
    VALUES(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    fullColumnName(): FullColumnNameContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CaseExpressionFunctionCallContext extends SpecificFunctionContext {
    _elseArg: FunctionArgContext;
    CASE(): TerminalNode;
    expression(): ExpressionContext;
    END(): TerminalNode;
    caseFuncAlternative(): CaseFuncAlternativeContext[];
    caseFuncAlternative(i: number): CaseFuncAlternativeContext;
    ELSE(): TerminalNode | undefined;
    functionArg(): FunctionArgContext | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CaseFunctionCallContext extends SpecificFunctionContext {
    _elseArg: FunctionArgContext;
    CASE(): TerminalNode;
    END(): TerminalNode;
    caseFuncAlternative(): CaseFuncAlternativeContext[];
    caseFuncAlternative(i: number): CaseFuncAlternativeContext;
    ELSE(): TerminalNode | undefined;
    functionArg(): FunctionArgContext | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CharFunctionCallContext extends SpecificFunctionContext {
    CHAR(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    functionArgs(): FunctionArgsContext;
    RR_BRACKET(): TerminalNode;
    USING(): TerminalNode | undefined;
    charsetName(): CharsetNameContext | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PositionFunctionCallContext extends SpecificFunctionContext {
    _positionString: StringLiteralContext;
    _positionExpression: ExpressionContext;
    _inString: StringLiteralContext;
    _inExpression: ExpressionContext;
    POSITION(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    IN(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    stringLiteral(): StringLiteralContext[];
    stringLiteral(i: number): StringLiteralContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SubstrFunctionCallContext extends SpecificFunctionContext {
    _sourceString: StringLiteralContext;
    _sourceExpression: ExpressionContext;
    _fromDecimal: DecimalLiteralContext;
    _fromExpression: ExpressionContext;
    _forDecimal: DecimalLiteralContext;
    _forExpression: ExpressionContext;
    LR_BRACKET(): TerminalNode;
    FROM(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    SUBSTR(): TerminalNode | undefined;
    SUBSTRING(): TerminalNode | undefined;
    stringLiteral(): StringLiteralContext | undefined;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext;
    FOR(): TerminalNode | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TrimFunctionCallContext extends SpecificFunctionContext {
    _positioinForm: Token;
    _sourceString: StringLiteralContext;
    _sourceExpression: ExpressionContext;
    _fromString: StringLiteralContext;
    _fromExpression: ExpressionContext;
    TRIM(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    FROM(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    BOTH(): TerminalNode | undefined;
    LEADING(): TerminalNode | undefined;
    TRAILING(): TerminalNode | undefined;
    stringLiteral(): StringLiteralContext[];
    stringLiteral(i: number): StringLiteralContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WeightFunctionCallContext extends SpecificFunctionContext {
    _stringFormat: Token;
    WEIGHT_STRING(): TerminalNode;
    LR_BRACKET(): TerminalNode[];
    LR_BRACKET(i: number): TerminalNode;
    RR_BRACKET(): TerminalNode[];
    RR_BRACKET(i: number): TerminalNode;
    stringLiteral(): StringLiteralContext | undefined;
    expression(): ExpressionContext | undefined;
    AS(): TerminalNode | undefined;
    decimalLiteral(): DecimalLiteralContext | undefined;
    levelsInWeightString(): LevelsInWeightStringContext | undefined;
    CHAR(): TerminalNode | undefined;
    BINARY(): TerminalNode | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExtractFunctionCallContext extends SpecificFunctionContext {
    _sourceString: StringLiteralContext;
    _sourceExpression: ExpressionContext;
    EXTRACT(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    intervalType(): IntervalTypeContext;
    FROM(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    stringLiteral(): StringLiteralContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class GetFormatFunctionCallContext extends SpecificFunctionContext {
    _datetimeFormat: Token;
    GET_FORMAT(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode;
    stringLiteral(): StringLiteralContext;
    RR_BRACKET(): TerminalNode;
    DATE(): TerminalNode | undefined;
    TIME(): TerminalNode | undefined;
    DATETIME(): TerminalNode | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JsonValueFunctionCallContext extends SpecificFunctionContext {
    JSON_VALUE(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    RETURNING(): TerminalNode | undefined;
    convertedDataType(): ConvertedDataTypeContext | undefined;
    jsonOnEmpty(): JsonOnEmptyContext | undefined;
    jsonOnError(): JsonOnErrorContext | undefined;
    constructor(ctx: SpecificFunctionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CaseFuncAlternativeContext extends ParserRuleContext {
    _condition: FunctionArgContext;
    _consequent: FunctionArgContext;
    WHEN(): TerminalNode;
    THEN(): TerminalNode;
    functionArg(): FunctionArgContext[];
    functionArg(i: number): FunctionArgContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LevelsInWeightStringContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: LevelsInWeightStringContext): void;
}
export declare class LevelWeightListContext extends LevelsInWeightStringContext {
    LEVEL(): TerminalNode;
    levelInWeightListElement(): LevelInWeightListElementContext[];
    levelInWeightListElement(i: number): LevelInWeightListElementContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: LevelsInWeightStringContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LevelWeightRangeContext extends LevelsInWeightStringContext {
    _firstLevel: DecimalLiteralContext;
    _lastLevel: DecimalLiteralContext;
    LEVEL(): TerminalNode;
    MINUS(): TerminalNode;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext;
    constructor(ctx: LevelsInWeightStringContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LevelInWeightListElementContext extends ParserRuleContext {
    _orderType: Token;
    decimalLiteral(): DecimalLiteralContext;
    ASC(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    REVERSE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class AggregateWindowedFunctionContext extends ParserRuleContext {
    _aggregator: Token;
    _starArg: Token;
    _separator: Token;
    LR_BRACKET(): TerminalNode;
    functionArg(): FunctionArgContext | undefined;
    RR_BRACKET(): TerminalNode;
    AVG(): TerminalNode | undefined;
    MAX(): TerminalNode | undefined;
    MIN(): TerminalNode | undefined;
    SUM(): TerminalNode | undefined;
    overClause(): OverClauseContext | undefined;
    ALL(): TerminalNode | undefined;
    DISTINCT(): TerminalNode | undefined;
    COUNT(): TerminalNode | undefined;
    functionArgs(): FunctionArgsContext | undefined;
    STAR(): TerminalNode | undefined;
    BIT_AND(): TerminalNode | undefined;
    BIT_OR(): TerminalNode | undefined;
    BIT_XOR(): TerminalNode | undefined;
    STD(): TerminalNode | undefined;
    STDDEV(): TerminalNode | undefined;
    STDDEV_POP(): TerminalNode | undefined;
    STDDEV_SAMP(): TerminalNode | undefined;
    VAR_POP(): TerminalNode | undefined;
    VAR_SAMP(): TerminalNode | undefined;
    VARIANCE(): TerminalNode | undefined;
    GROUP_CONCAT(): TerminalNode | undefined;
    ORDER(): TerminalNode | undefined;
    BY(): TerminalNode | undefined;
    orderByExpression(): OrderByExpressionContext[];
    orderByExpression(i: number): OrderByExpressionContext;
    SEPARATOR(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class NonAggregateWindowedFunctionContext extends ParserRuleContext {
    LR_BRACKET(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    overClause(): OverClauseContext;
    LAG(): TerminalNode | undefined;
    LEAD(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    decimalLiteral(): DecimalLiteralContext[];
    decimalLiteral(i: number): DecimalLiteralContext;
    FIRST_VALUE(): TerminalNode | undefined;
    LAST_VALUE(): TerminalNode | undefined;
    LR_BRACKETRR_BRACKET(): TerminalNode | undefined;
    CUME_DIST(): TerminalNode | undefined;
    DENSE_RANK(): TerminalNode | undefined;
    PERCENT_RANK(): TerminalNode | undefined;
    RANK(): TerminalNode | undefined;
    ROW_NUMBER(): TerminalNode | undefined;
    NTH_VALUE(): TerminalNode | undefined;
    NTILE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class OverClauseContext extends ParserRuleContext {
    OVER(): TerminalNode;
    LR_BRACKET(): TerminalNode | undefined;
    RR_BRACKET(): TerminalNode | undefined;
    windowName(): WindowNameContext | undefined;
    windowSpec(): WindowSpecContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WindowSpecContext extends ParserRuleContext {
    windowName(): WindowNameContext | undefined;
    partitionClause(): PartitionClauseContext | undefined;
    orderByClause(): OrderByClauseContext | undefined;
    frameClause(): FrameClauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class WindowNameContext extends ParserRuleContext {
    uid(): UidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FrameClauseContext extends ParserRuleContext {
    frameUnits(): FrameUnitsContext;
    frameExtent(): FrameExtentContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FrameUnitsContext extends ParserRuleContext {
    ROWS(): TerminalNode | undefined;
    RANGE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FrameExtentContext extends ParserRuleContext {
    frameRange(): FrameRangeContext | undefined;
    frameBetween(): FrameBetweenContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FrameBetweenContext extends ParserRuleContext {
    BETWEEN(): TerminalNode;
    frameRange(): FrameRangeContext[];
    frameRange(i: number): FrameRangeContext;
    AND(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FrameRangeContext extends ParserRuleContext {
    CURRENT(): TerminalNode | undefined;
    ROW(): TerminalNode | undefined;
    UNBOUNDED(): TerminalNode | undefined;
    PRECEDING(): TerminalNode | undefined;
    FOLLOWING(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PartitionClauseContext extends ParserRuleContext {
    PARTITION(): TerminalNode;
    BY(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ScalarFunctionNameContext extends ParserRuleContext {
    functionNameBase(): FunctionNameBaseContext | undefined;
    ASCII(): TerminalNode | undefined;
    CURDATE(): TerminalNode | undefined;
    CURRENT_DATE(): TerminalNode | undefined;
    CURRENT_TIME(): TerminalNode | undefined;
    CURRENT_TIMESTAMP(): TerminalNode | undefined;
    CURTIME(): TerminalNode | undefined;
    DATE_ADD(): TerminalNode | undefined;
    DATE_SUB(): TerminalNode | undefined;
    IF(): TerminalNode | undefined;
    INSERT(): TerminalNode | undefined;
    LOCALTIME(): TerminalNode | undefined;
    LOCALTIMESTAMP(): TerminalNode | undefined;
    MID(): TerminalNode | undefined;
    NOW(): TerminalNode | undefined;
    REPLACE(): TerminalNode | undefined;
    SUBSTR(): TerminalNode | undefined;
    SUBSTRING(): TerminalNode | undefined;
    SYSDATE(): TerminalNode | undefined;
    TRIM(): TerminalNode | undefined;
    UTC_DATE(): TerminalNode | undefined;
    UTC_TIME(): TerminalNode | undefined;
    UTC_TIMESTAMP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PasswordFunctionClauseContext extends ParserRuleContext {
    _functionName: Token;
    LR_BRACKET(): TerminalNode;
    functionArg(): FunctionArgContext;
    RR_BRACKET(): TerminalNode;
    PASSWORD(): TerminalNode | undefined;
    OLD_PASSWORD(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FunctionArgsContext extends ParserRuleContext {
    constant(): ConstantContext[];
    constant(i: number): ConstantContext;
    fullColumnName(): FullColumnNameContext[];
    fullColumnName(i: number): FullColumnNameContext;
    functionCall(): FunctionCallContext[];
    functionCall(i: number): FunctionCallContext;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FunctionArgContext extends ParserRuleContext {
    constant(): ConstantContext | undefined;
    fullColumnName(): FullColumnNameContext | undefined;
    functionCall(): FunctionCallContext | undefined;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExpressionContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionContext): void;
}
export declare class NotExpressionContext extends ExpressionContext {
    _notOperator: Token;
    expression(): ExpressionContext;
    NOT(): TerminalNode | undefined;
    EXCLAMATION_SYMBOL(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LogicalExpressionContext extends ExpressionContext {
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    logicalOperator(): LogicalOperatorContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IsExpressionContext extends ExpressionContext {
    _testValue: Token;
    predicate(): PredicateContext;
    IS(): TerminalNode;
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    UNKNOWN(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(ctx: ExpressionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PredicateExpressionContext extends ExpressionContext {
    predicate(): PredicateContext;
    constructor(ctx: ExpressionContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PredicateContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: PredicateContext): void;
}
export declare class InPredicateContext extends PredicateContext {
    predicate(): PredicateContext;
    IN(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    selectStatement(): SelectStatementContext | undefined;
    expressions(): ExpressionsContext | undefined;
    NOT(): TerminalNode | undefined;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IsNullPredicateContext extends PredicateContext {
    predicate(): PredicateContext;
    IS(): TerminalNode;
    nullNotnull(): NullNotnullContext;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BinaryComparisonPredicateContext extends PredicateContext {
    _left: PredicateContext;
    _right: PredicateContext;
    comparisonOperator(): ComparisonOperatorContext;
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SubqueryComparisonPredicateContext extends PredicateContext {
    _quantifier: Token;
    predicate(): PredicateContext;
    comparisonOperator(): ComparisonOperatorContext;
    LR_BRACKET(): TerminalNode;
    selectStatement(): SelectStatementContext;
    RR_BRACKET(): TerminalNode;
    ALL(): TerminalNode | undefined;
    ANY(): TerminalNode | undefined;
    SOME(): TerminalNode | undefined;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BetweenPredicateContext extends PredicateContext {
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext;
    BETWEEN(): TerminalNode;
    AND(): TerminalNode;
    NOT(): TerminalNode | undefined;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SoundsLikePredicateContext extends PredicateContext {
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext;
    SOUNDS(): TerminalNode;
    LIKE(): TerminalNode;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LikePredicateContext extends PredicateContext {
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext;
    LIKE(): TerminalNode;
    NOT(): TerminalNode | undefined;
    ESCAPE(): TerminalNode | undefined;
    STRING_LITERAL(): TerminalNode | undefined;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class RegexpPredicateContext extends PredicateContext {
    _regex: Token;
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext;
    REGEXP(): TerminalNode | undefined;
    RLIKE(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExpressionAtomPredicateContext extends PredicateContext {
    expressionAtom(): ExpressionAtomContext;
    LOCAL_ID(): TerminalNode | undefined;
    VAR_ASSIGN(): TerminalNode | undefined;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JsonMemberOfPredicateContext extends PredicateContext {
    predicate(): PredicateContext[];
    predicate(i: number): PredicateContext;
    MEMBER(): TerminalNode;
    OF(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: PredicateContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExpressionAtomContext extends ParserRuleContext {
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    copyFrom(ctx: ExpressionAtomContext): void;
}
export declare class ConstantExpressionAtomContext extends ExpressionAtomContext {
    constant(): ConstantContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FullColumnNameExpressionAtomContext extends ExpressionAtomContext {
    fullColumnName(): FullColumnNameContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FunctionCallExpressionAtomContext extends ExpressionAtomContext {
    functionCall(): FunctionCallContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CollateExpressionAtomContext extends ExpressionAtomContext {
    expressionAtom(): ExpressionAtomContext;
    COLLATE(): TerminalNode;
    collationName(): CollationNameContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MysqlVariableExpressionAtomContext extends ExpressionAtomContext {
    mysqlVariable(): MysqlVariableContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UnaryExpressionAtomContext extends ExpressionAtomContext {
    unaryOperator(): UnaryOperatorContext;
    expressionAtom(): ExpressionAtomContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BinaryExpressionAtomContext extends ExpressionAtomContext {
    BINARY(): TerminalNode;
    expressionAtom(): ExpressionAtomContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class NestedExpressionAtomContext extends ExpressionAtomContext {
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class NestedRowExpressionAtomContext extends ExpressionAtomContext {
    ROW(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    expression(): ExpressionContext[];
    expression(i: number): ExpressionContext;
    RR_BRACKET(): TerminalNode;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ExistsExpressionAtomContext extends ExpressionAtomContext {
    EXISTS(): TerminalNode;
    LR_BRACKET(): TerminalNode;
    selectStatement(): SelectStatementContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class SubqueryExpressionAtomContext extends ExpressionAtomContext {
    LR_BRACKET(): TerminalNode;
    selectStatement(): SelectStatementContext;
    RR_BRACKET(): TerminalNode;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IntervalExpressionAtomContext extends ExpressionAtomContext {
    INTERVAL(): TerminalNode;
    expression(): ExpressionContext;
    intervalType(): IntervalTypeContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BitExpressionAtomContext extends ExpressionAtomContext {
    _left: ExpressionAtomContext;
    _right: ExpressionAtomContext;
    bitOperator(): BitOperatorContext;
    expressionAtom(): ExpressionAtomContext[];
    expressionAtom(i: number): ExpressionAtomContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MathExpressionAtomContext extends ExpressionAtomContext {
    _left: ExpressionAtomContext;
    _right: ExpressionAtomContext;
    mathOperator(): MathOperatorContext;
    expressionAtom(): ExpressionAtomContext[];
    expressionAtom(i: number): ExpressionAtomContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JsonExpressionAtomContext extends ExpressionAtomContext {
    _left: ExpressionAtomContext;
    _right: ExpressionAtomContext;
    jsonOperator(): JsonOperatorContext;
    expressionAtom(): ExpressionAtomContext[];
    expressionAtom(i: number): ExpressionAtomContext;
    constructor(ctx: ExpressionAtomContext);
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class UnaryOperatorContext extends ParserRuleContext {
    EXCLAMATION_SYMBOL(): TerminalNode | undefined;
    BIT_NOT_OP(): TerminalNode | undefined;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class ComparisonOperatorContext extends ParserRuleContext {
    EQUAL_SYMBOL(): TerminalNode | undefined;
    GREATER_SYMBOL(): TerminalNode | undefined;
    LESS_SYMBOL(): TerminalNode | undefined;
    EXCLAMATION_SYMBOL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class LogicalOperatorContext extends ParserRuleContext {
    AND(): TerminalNode | undefined;
    BIT_AND_OP(): TerminalNode[];
    BIT_AND_OP(i: number): TerminalNode;
    XOR(): TerminalNode | undefined;
    OR(): TerminalNode | undefined;
    BIT_OR_OP(): TerminalNode[];
    BIT_OR_OP(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class BitOperatorContext extends ParserRuleContext {
    LESS_SYMBOL(): TerminalNode[];
    LESS_SYMBOL(i: number): TerminalNode;
    GREATER_SYMBOL(): TerminalNode[];
    GREATER_SYMBOL(i: number): TerminalNode;
    BIT_AND_OP(): TerminalNode | undefined;
    BIT_XOR_OP(): TerminalNode | undefined;
    BIT_OR_OP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class MathOperatorContext extends ParserRuleContext {
    STAR(): TerminalNode | undefined;
    DIVIDE(): TerminalNode | undefined;
    MODULE(): TerminalNode | undefined;
    DIV(): TerminalNode | undefined;
    MOD(): TerminalNode | undefined;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class JsonOperatorContext extends ParserRuleContext {
    MINUS(): TerminalNode;
    GREATER_SYMBOL(): TerminalNode[];
    GREATER_SYMBOL(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class CharsetNameBaseContext extends ParserRuleContext {
    ARMSCII8(): TerminalNode | undefined;
    ASCII(): TerminalNode | undefined;
    BIG5(): TerminalNode | undefined;
    BINARY(): TerminalNode | undefined;
    CP1250(): TerminalNode | undefined;
    CP1251(): TerminalNode | undefined;
    CP1256(): TerminalNode | undefined;
    CP1257(): TerminalNode | undefined;
    CP850(): TerminalNode | undefined;
    CP852(): TerminalNode | undefined;
    CP866(): TerminalNode | undefined;
    CP932(): TerminalNode | undefined;
    DEC8(): TerminalNode | undefined;
    EUCJPMS(): TerminalNode | undefined;
    EUCKR(): TerminalNode | undefined;
    GB18030(): TerminalNode | undefined;
    GB2312(): TerminalNode | undefined;
    GBK(): TerminalNode | undefined;
    GEOSTD8(): TerminalNode | undefined;
    GREEK(): TerminalNode | undefined;
    HEBREW(): TerminalNode | undefined;
    HP8(): TerminalNode | undefined;
    KEYBCS2(): TerminalNode | undefined;
    KOI8R(): TerminalNode | undefined;
    KOI8U(): TerminalNode | undefined;
    LATIN1(): TerminalNode | undefined;
    LATIN2(): TerminalNode | undefined;
    LATIN5(): TerminalNode | undefined;
    LATIN7(): TerminalNode | undefined;
    MACCE(): TerminalNode | undefined;
    MACROMAN(): TerminalNode | undefined;
    SJIS(): TerminalNode | undefined;
    SWE7(): TerminalNode | undefined;
    TIS620(): TerminalNode | undefined;
    UCS2(): TerminalNode | undefined;
    UJIS(): TerminalNode | undefined;
    UTF16(): TerminalNode | undefined;
    UTF16LE(): TerminalNode | undefined;
    UTF32(): TerminalNode | undefined;
    UTF8(): TerminalNode | undefined;
    UTF8MB3(): TerminalNode | undefined;
    UTF8MB4(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class TransactionLevelBaseContext extends ParserRuleContext {
    REPEATABLE(): TerminalNode | undefined;
    COMMITTED(): TerminalNode | undefined;
    UNCOMMITTED(): TerminalNode | undefined;
    SERIALIZABLE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class PrivilegesBaseContext extends ParserRuleContext {
    TABLES(): TerminalNode | undefined;
    ROUTINE(): TerminalNode | undefined;
    EXECUTE(): TerminalNode | undefined;
    FILE(): TerminalNode | undefined;
    PROCESS(): TerminalNode | undefined;
    RELOAD(): TerminalNode | undefined;
    SHUTDOWN(): TerminalNode | undefined;
    SUPER(): TerminalNode | undefined;
    PRIVILEGES(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class IntervalTypeBaseContext extends ParserRuleContext {
    QUARTER(): TerminalNode | undefined;
    MONTH(): TerminalNode | undefined;
    DAY(): TerminalNode | undefined;
    HOUR(): TerminalNode | undefined;
    MINUTE(): TerminalNode | undefined;
    WEEK(): TerminalNode | undefined;
    SECOND(): TerminalNode | undefined;
    MICROSECOND(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class DataTypeBaseContext extends ParserRuleContext {
    DATE(): TerminalNode | undefined;
    TIME(): TerminalNode | undefined;
    TIMESTAMP(): TerminalNode | undefined;
    DATETIME(): TerminalNode | undefined;
    YEAR(): TerminalNode | undefined;
    ENUM(): TerminalNode | undefined;
    TEXT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class KeywordsCanBeIdContext extends ParserRuleContext {
    ACCOUNT(): TerminalNode | undefined;
    ACTION(): TerminalNode | undefined;
    ADMIN(): TerminalNode | undefined;
    AFTER(): TerminalNode | undefined;
    AGGREGATE(): TerminalNode | undefined;
    ALGORITHM(): TerminalNode | undefined;
    ANY(): TerminalNode | undefined;
    AT(): TerminalNode | undefined;
    AUDIT_ADMIN(): TerminalNode | undefined;
    AUTHORS(): TerminalNode | undefined;
    AUTOCOMMIT(): TerminalNode | undefined;
    AUTOEXTEND_SIZE(): TerminalNode | undefined;
    AUTO_INCREMENT(): TerminalNode | undefined;
    AVG(): TerminalNode | undefined;
    AVG_ROW_LENGTH(): TerminalNode | undefined;
    ATTRIBUTE(): TerminalNode | undefined;
    BACKUP_ADMIN(): TerminalNode | undefined;
    BEGIN(): TerminalNode | undefined;
    BINLOG(): TerminalNode | undefined;
    BINLOG_ADMIN(): TerminalNode | undefined;
    BINLOG_ENCRYPTION_ADMIN(): TerminalNode | undefined;
    BIT(): TerminalNode | undefined;
    BIT_AND(): TerminalNode | undefined;
    BIT_OR(): TerminalNode | undefined;
    BIT_XOR(): TerminalNode | undefined;
    BLOCK(): TerminalNode | undefined;
    BODY(): TerminalNode | undefined;
    BOOL(): TerminalNode | undefined;
    BOOLEAN(): TerminalNode | undefined;
    BTREE(): TerminalNode | undefined;
    BUCKETS(): TerminalNode | undefined;
    CACHE(): TerminalNode | undefined;
    CASCADED(): TerminalNode | undefined;
    CHAIN(): TerminalNode | undefined;
    CHANGED(): TerminalNode | undefined;
    CHANNEL(): TerminalNode | undefined;
    CHECKSUM(): TerminalNode | undefined;
    PAGE_CHECKSUM(): TerminalNode | undefined;
    CATALOG_NAME(): TerminalNode | undefined;
    CIPHER(): TerminalNode | undefined;
    CLASS_ORIGIN(): TerminalNode | undefined;
    CLIENT(): TerminalNode | undefined;
    CLONE_ADMIN(): TerminalNode | undefined;
    CLOSE(): TerminalNode | undefined;
    CLUSTERING(): TerminalNode | undefined;
    COALESCE(): TerminalNode | undefined;
    CODE(): TerminalNode | undefined;
    COLUMNS(): TerminalNode | undefined;
    COLUMN_FORMAT(): TerminalNode | undefined;
    COLUMN_NAME(): TerminalNode | undefined;
    COMMENT(): TerminalNode | undefined;
    COMMIT(): TerminalNode | undefined;
    COMPACT(): TerminalNode | undefined;
    COMPLETION(): TerminalNode | undefined;
    COMPRESSED(): TerminalNode | undefined;
    COMPRESSION(): TerminalNode | undefined;
    CONCURRENT(): TerminalNode | undefined;
    CONDITION(): TerminalNode | undefined;
    CONNECT(): TerminalNode | undefined;
    CONNECTION(): TerminalNode | undefined;
    CONNECTION_ADMIN(): TerminalNode | undefined;
    CONSISTENT(): TerminalNode | undefined;
    CONSTRAINT_CATALOG(): TerminalNode | undefined;
    CONSTRAINT_NAME(): TerminalNode | undefined;
    CONSTRAINT_SCHEMA(): TerminalNode | undefined;
    CONTAINS(): TerminalNode | undefined;
    CONTEXT(): TerminalNode | undefined;
    CONTRIBUTORS(): TerminalNode | undefined;
    COPY(): TerminalNode | undefined;
    COUNT(): TerminalNode | undefined;
    CPU(): TerminalNode | undefined;
    CURRENT(): TerminalNode | undefined;
    CURRENT_USER(): TerminalNode | undefined;
    CURSOR_NAME(): TerminalNode | undefined;
    DATA(): TerminalNode | undefined;
    DATAFILE(): TerminalNode | undefined;
    DEALLOCATE(): TerminalNode | undefined;
    DEFAULT(): TerminalNode | undefined;
    DEFAULT_AUTH(): TerminalNode | undefined;
    DEFINER(): TerminalNode | undefined;
    DELAY_KEY_WRITE(): TerminalNode | undefined;
    DES_KEY_FILE(): TerminalNode | undefined;
    DIAGNOSTICS(): TerminalNode | undefined;
    DIRECTORY(): TerminalNode | undefined;
    DISABLE(): TerminalNode | undefined;
    DISCARD(): TerminalNode | undefined;
    DISK(): TerminalNode | undefined;
    DO(): TerminalNode | undefined;
    DUMPFILE(): TerminalNode | undefined;
    DUPLICATE(): TerminalNode | undefined;
    DYNAMIC(): TerminalNode | undefined;
    EMPTY(): TerminalNode | undefined;
    ENABLE(): TerminalNode | undefined;
    ENCRYPTION(): TerminalNode | undefined;
    ENCRYPTION_KEY_ADMIN(): TerminalNode | undefined;
    END(): TerminalNode | undefined;
    ENDS(): TerminalNode | undefined;
    ENGINE(): TerminalNode | undefined;
    ENGINE_ATTRIBUTE(): TerminalNode | undefined;
    ENGINES(): TerminalNode | undefined;
    ERROR(): TerminalNode | undefined;
    ERRORS(): TerminalNode | undefined;
    ESCAPE(): TerminalNode | undefined;
    EUR(): TerminalNode | undefined;
    EVEN(): TerminalNode | undefined;
    EVENT(): TerminalNode | undefined;
    EVENTS(): TerminalNode | undefined;
    EVERY(): TerminalNode | undefined;
    EXCEPT(): TerminalNode | undefined;
    EXCHANGE(): TerminalNode | undefined;
    EXCLUSIVE(): TerminalNode | undefined;
    EXPIRE(): TerminalNode | undefined;
    EXPORT(): TerminalNode | undefined;
    EXTENDED(): TerminalNode | undefined;
    EXTENT_SIZE(): TerminalNode | undefined;
    FAILED_LOGIN_ATTEMPTS(): TerminalNode | undefined;
    FAST(): TerminalNode | undefined;
    FAULTS(): TerminalNode | undefined;
    FIELDS(): TerminalNode | undefined;
    FILE_BLOCK_SIZE(): TerminalNode | undefined;
    FILTER(): TerminalNode | undefined;
    FIREWALL_ADMIN(): TerminalNode | undefined;
    FIREWALL_USER(): TerminalNode | undefined;
    FIRST(): TerminalNode | undefined;
    FIXED(): TerminalNode | undefined;
    FLUSH(): TerminalNode | undefined;
    FOLLOWS(): TerminalNode | undefined;
    FOUND(): TerminalNode | undefined;
    FULL(): TerminalNode | undefined;
    FUNCTION(): TerminalNode | undefined;
    GENERAL(): TerminalNode | undefined;
    GLOBAL(): TerminalNode | undefined;
    GRANTS(): TerminalNode | undefined;
    GROUP(): TerminalNode | undefined;
    GROUP_CONCAT(): TerminalNode | undefined;
    GROUP_REPLICATION(): TerminalNode | undefined;
    GROUP_REPLICATION_ADMIN(): TerminalNode | undefined;
    HANDLER(): TerminalNode | undefined;
    HASH(): TerminalNode | undefined;
    HELP(): TerminalNode | undefined;
    HISTORY(): TerminalNode | undefined;
    HOST(): TerminalNode | undefined;
    HOSTS(): TerminalNode | undefined;
    IDENTIFIED(): TerminalNode | undefined;
    IGNORED(): TerminalNode | undefined;
    IGNORE_SERVER_IDS(): TerminalNode | undefined;
    IMPORT(): TerminalNode | undefined;
    INDEXES(): TerminalNode | undefined;
    INITIAL_SIZE(): TerminalNode | undefined;
    INNODB_REDO_LOG_ARCHIVE(): TerminalNode | undefined;
    INPLACE(): TerminalNode | undefined;
    INSERT_METHOD(): TerminalNode | undefined;
    INSTALL(): TerminalNode | undefined;
    INSTANCE(): TerminalNode | undefined;
    INSTANT(): TerminalNode | undefined;
    INTERNAL(): TerminalNode | undefined;
    INVOKE(): TerminalNode | undefined;
    INVOKER(): TerminalNode | undefined;
    IO(): TerminalNode | undefined;
    IO_THREAD(): TerminalNode | undefined;
    IPC(): TerminalNode | undefined;
    ISO(): TerminalNode | undefined;
    ISOLATION(): TerminalNode | undefined;
    ISSUER(): TerminalNode | undefined;
    JIS(): TerminalNode | undefined;
    JSON(): TerminalNode | undefined;
    KEY_BLOCK_SIZE(): TerminalNode | undefined;
    LAMBDA(): TerminalNode | undefined;
    LANGUAGE(): TerminalNode | undefined;
    LAST(): TerminalNode | undefined;
    LATERAL(): TerminalNode | undefined;
    LEAVES(): TerminalNode | undefined;
    LESS(): TerminalNode | undefined;
    LEVEL(): TerminalNode | undefined;
    LIST(): TerminalNode | undefined;
    LOCAL(): TerminalNode | undefined;
    LOCALES(): TerminalNode | undefined;
    LOGFILE(): TerminalNode | undefined;
    LOGS(): TerminalNode | undefined;
    MASTER(): TerminalNode | undefined;
    MASTER_AUTO_POSITION(): TerminalNode | undefined;
    MASTER_CONNECT_RETRY(): TerminalNode | undefined;
    MASTER_DELAY(): TerminalNode | undefined;
    MASTER_HEARTBEAT_PERIOD(): TerminalNode | undefined;
    MASTER_HOST(): TerminalNode | undefined;
    MASTER_LOG_FILE(): TerminalNode | undefined;
    MASTER_LOG_POS(): TerminalNode | undefined;
    MASTER_PASSWORD(): TerminalNode | undefined;
    MASTER_PORT(): TerminalNode | undefined;
    MASTER_RETRY_COUNT(): TerminalNode | undefined;
    MASTER_SSL(): TerminalNode | undefined;
    MASTER_SSL_CA(): TerminalNode | undefined;
    MASTER_SSL_CAPATH(): TerminalNode | undefined;
    MASTER_SSL_CERT(): TerminalNode | undefined;
    MASTER_SSL_CIPHER(): TerminalNode | undefined;
    MASTER_SSL_CRL(): TerminalNode | undefined;
    MASTER_SSL_CRLPATH(): TerminalNode | undefined;
    MASTER_SSL_KEY(): TerminalNode | undefined;
    MASTER_TLS_VERSION(): TerminalNode | undefined;
    MASTER_USER(): TerminalNode | undefined;
    MAX_CONNECTIONS_PER_HOUR(): TerminalNode | undefined;
    MAX_QUERIES_PER_HOUR(): TerminalNode | undefined;
    MAX(): TerminalNode | undefined;
    MAX_ROWS(): TerminalNode | undefined;
    MAX_SIZE(): TerminalNode | undefined;
    MAX_UPDATES_PER_HOUR(): TerminalNode | undefined;
    MAX_USER_CONNECTIONS(): TerminalNode | undefined;
    MEDIUM(): TerminalNode | undefined;
    MEMBER(): TerminalNode | undefined;
    MEMORY(): TerminalNode | undefined;
    MERGE(): TerminalNode | undefined;
    MESSAGE_TEXT(): TerminalNode | undefined;
    MID(): TerminalNode | undefined;
    MIGRATE(): TerminalNode | undefined;
    MIN(): TerminalNode | undefined;
    MIN_ROWS(): TerminalNode | undefined;
    MODE(): TerminalNode | undefined;
    MODIFY(): TerminalNode | undefined;
    MUTEX(): TerminalNode | undefined;
    MYSQL(): TerminalNode | undefined;
    MYSQL_ERRNO(): TerminalNode | undefined;
    NAME(): TerminalNode | undefined;
    NAMES(): TerminalNode | undefined;
    NCHAR(): TerminalNode | undefined;
    NDB_STORED_USER(): TerminalNode | undefined;
    NESTED(): TerminalNode | undefined;
    NEVER(): TerminalNode | undefined;
    NEXT(): TerminalNode | undefined;
    NO(): TerminalNode | undefined;
    NOCOPY(): TerminalNode | undefined;
    NODEGROUP(): TerminalNode | undefined;
    NONE(): TerminalNode | undefined;
    NOWAIT(): TerminalNode | undefined;
    NUMBER(): TerminalNode | undefined;
    ODBC(): TerminalNode | undefined;
    OFFLINE(): TerminalNode | undefined;
    OFFSET(): TerminalNode | undefined;
    OF(): TerminalNode | undefined;
    OJ(): TerminalNode | undefined;
    OLD_PASSWORD(): TerminalNode | undefined;
    ONE(): TerminalNode | undefined;
    ONLINE(): TerminalNode | undefined;
    ONLY(): TerminalNode | undefined;
    OPEN(): TerminalNode | undefined;
    OPTIMIZER_COSTS(): TerminalNode | undefined;
    OPTIONAL(): TerminalNode | undefined;
    OPTIONS(): TerminalNode | undefined;
    ORDER(): TerminalNode | undefined;
    ORDINALITY(): TerminalNode | undefined;
    OWNER(): TerminalNode | undefined;
    PACKAGE(): TerminalNode | undefined;
    PACK_KEYS(): TerminalNode | undefined;
    PAGE(): TerminalNode | undefined;
    PARSER(): TerminalNode | undefined;
    PARTIAL(): TerminalNode | undefined;
    PARTITIONING(): TerminalNode | undefined;
    PARTITIONS(): TerminalNode | undefined;
    PASSWORD(): TerminalNode | undefined;
    PASSWORDLESS_USER_ADMIN(): TerminalNode | undefined;
    PASSWORD_LOCK_TIME(): TerminalNode | undefined;
    PATH(): TerminalNode | undefined;
    PERSIST_RO_VARIABLES_ADMIN(): TerminalNode | undefined;
    PHASE(): TerminalNode | undefined;
    PLUGINS(): TerminalNode | undefined;
    PLUGIN_DIR(): TerminalNode | undefined;
    PLUGIN(): TerminalNode | undefined;
    PORT(): TerminalNode | undefined;
    PRECEDES(): TerminalNode | undefined;
    PREPARE(): TerminalNode | undefined;
    PRESERVE(): TerminalNode | undefined;
    PREV(): TerminalNode | undefined;
    PRIMARY(): TerminalNode | undefined;
    PROCESSLIST(): TerminalNode | undefined;
    PROFILE(): TerminalNode | undefined;
    PROFILES(): TerminalNode | undefined;
    PROXY(): TerminalNode | undefined;
    QUERY(): TerminalNode | undefined;
    QUERY_RESPONSE_TIME(): TerminalNode | undefined;
    QUICK(): TerminalNode | undefined;
    REBUILD(): TerminalNode | undefined;
    RECOVER(): TerminalNode | undefined;
    RECURSIVE(): TerminalNode | undefined;
    REDO_BUFFER_SIZE(): TerminalNode | undefined;
    REDUNDANT(): TerminalNode | undefined;
    RELAY(): TerminalNode | undefined;
    RELAYLOG(): TerminalNode | undefined;
    RELAY_LOG_FILE(): TerminalNode | undefined;
    RELAY_LOG_POS(): TerminalNode | undefined;
    REMOVE(): TerminalNode | undefined;
    REORGANIZE(): TerminalNode | undefined;
    REPAIR(): TerminalNode | undefined;
    REPLICAS(): TerminalNode | undefined;
    REPLICATE_DO_DB(): TerminalNode | undefined;
    REPLICATE_DO_TABLE(): TerminalNode | undefined;
    REPLICATE_IGNORE_DB(): TerminalNode | undefined;
    REPLICATE_IGNORE_TABLE(): TerminalNode | undefined;
    REPLICATE_REWRITE_DB(): TerminalNode | undefined;
    REPLICATE_WILD_DO_TABLE(): TerminalNode | undefined;
    REPLICATE_WILD_IGNORE_TABLE(): TerminalNode | undefined;
    REPLICATION(): TerminalNode | undefined;
    REPLICATION_APPLIER(): TerminalNode | undefined;
    REPLICATION_SLAVE_ADMIN(): TerminalNode | undefined;
    RESET(): TerminalNode | undefined;
    RESOURCE_GROUP_ADMIN(): TerminalNode | undefined;
    RESOURCE_GROUP_USER(): TerminalNode | undefined;
    RESUME(): TerminalNode | undefined;
    RETURNED_SQLSTATE(): TerminalNode | undefined;
    RETURNS(): TerminalNode | undefined;
    REUSE(): TerminalNode | undefined;
    ROLE(): TerminalNode | undefined;
    ROLE_ADMIN(): TerminalNode | undefined;
    ROLLBACK(): TerminalNode | undefined;
    ROLLUP(): TerminalNode | undefined;
    ROTATE(): TerminalNode | undefined;
    ROW(): TerminalNode | undefined;
    ROWS(): TerminalNode | undefined;
    ROW_FORMAT(): TerminalNode | undefined;
    RTREE(): TerminalNode | undefined;
    S3(): TerminalNode | undefined;
    SAVEPOINT(): TerminalNode | undefined;
    SCHEDULE(): TerminalNode | undefined;
    SCHEMA_NAME(): TerminalNode | undefined;
    SECURITY(): TerminalNode | undefined;
    SECONDARY_ENGINE_ATTRIBUTE(): TerminalNode | undefined;
    SERIAL(): TerminalNode | undefined;
    SERVER(): TerminalNode | undefined;
    SESSION(): TerminalNode | undefined;
    SESSION_VARIABLES_ADMIN(): TerminalNode | undefined;
    SET_USER_ID(): TerminalNode | undefined;
    SHARE(): TerminalNode | undefined;
    SHARED(): TerminalNode | undefined;
    SHOW_ROUTINE(): TerminalNode | undefined;
    SIGNED(): TerminalNode | undefined;
    SIMPLE(): TerminalNode | undefined;
    SLAVE(): TerminalNode | undefined;
    SLAVES(): TerminalNode | undefined;
    SLOW(): TerminalNode | undefined;
    SNAPSHOT(): TerminalNode | undefined;
    SOCKET(): TerminalNode | undefined;
    SOME(): TerminalNode | undefined;
    SONAME(): TerminalNode | undefined;
    SOUNDS(): TerminalNode | undefined;
    SOURCE(): TerminalNode | undefined;
    SQL_AFTER_GTIDS(): TerminalNode | undefined;
    SQL_AFTER_MTS_GAPS(): TerminalNode | undefined;
    SQL_BEFORE_GTIDS(): TerminalNode | undefined;
    SQL_BUFFER_RESULT(): TerminalNode | undefined;
    SQL_CACHE(): TerminalNode | undefined;
    SQL_NO_CACHE(): TerminalNode | undefined;
    SQL_THREAD(): TerminalNode | undefined;
    STACKED(): TerminalNode | undefined;
    START(): TerminalNode | undefined;
    STARTS(): TerminalNode | undefined;
    STATS_AUTO_RECALC(): TerminalNode | undefined;
    STATS_PERSISTENT(): TerminalNode | undefined;
    STATS_SAMPLE_PAGES(): TerminalNode | undefined;
    STATUS(): TerminalNode | undefined;
    STD(): TerminalNode | undefined;
    STDDEV(): TerminalNode | undefined;
    STDDEV_POP(): TerminalNode | undefined;
    STDDEV_SAMP(): TerminalNode | undefined;
    STOP(): TerminalNode | undefined;
    STORAGE(): TerminalNode | undefined;
    STRING(): TerminalNode | undefined;
    SUBCLASS_ORIGIN(): TerminalNode | undefined;
    SUBJECT(): TerminalNode | undefined;
    SUBPARTITION(): TerminalNode | undefined;
    SUBPARTITIONS(): TerminalNode | undefined;
    SUM(): TerminalNode | undefined;
    SUSPEND(): TerminalNode | undefined;
    SWAPS(): TerminalNode | undefined;
    SWITCHES(): TerminalNode | undefined;
    SYSTEM_VARIABLES_ADMIN(): TerminalNode | undefined;
    TABLE_NAME(): TerminalNode | undefined;
    TABLESPACE(): TerminalNode | undefined;
    TABLE_ENCRYPTION_ADMIN(): TerminalNode | undefined;
    TABLE_TYPE(): TerminalNode | undefined;
    TEMPORARY(): TerminalNode | undefined;
    TEMPTABLE(): TerminalNode | undefined;
    THAN(): TerminalNode | undefined;
    TRADITIONAL(): TerminalNode | undefined;
    TRANSACTION(): TerminalNode | undefined;
    TRANSACTIONAL(): TerminalNode | undefined;
    TRIGGERS(): TerminalNode | undefined;
    TRUNCATE(): TerminalNode | undefined;
    TYPES(): TerminalNode | undefined;
    UNBOUNDED(): TerminalNode | undefined;
    UNDEFINED(): TerminalNode | undefined;
    UNDOFILE(): TerminalNode | undefined;
    UNDO_BUFFER_SIZE(): TerminalNode | undefined;
    UNINSTALL(): TerminalNode | undefined;
    UNKNOWN(): TerminalNode | undefined;
    UNTIL(): TerminalNode | undefined;
    UPGRADE(): TerminalNode | undefined;
    USA(): TerminalNode | undefined;
    USER(): TerminalNode | undefined;
    USE_FRM(): TerminalNode | undefined;
    USER_RESOURCES(): TerminalNode | undefined;
    VALIDATION(): TerminalNode | undefined;
    VALUE(): TerminalNode | undefined;
    VAR_POP(): TerminalNode | undefined;
    VAR_SAMP(): TerminalNode | undefined;
    VARIABLES(): TerminalNode | undefined;
    VARIANCE(): TerminalNode | undefined;
    VERSION_TOKEN_ADMIN(): TerminalNode | undefined;
    VIEW(): TerminalNode | undefined;
    VIRTUAL(): TerminalNode | undefined;
    WAIT(): TerminalNode | undefined;
    WARNINGS(): TerminalNode | undefined;
    WITHOUT(): TerminalNode | undefined;
    WORK(): TerminalNode | undefined;
    WRAPPER(): TerminalNode | undefined;
    WSREP_MEMBERSHIP(): TerminalNode | undefined;
    WSREP_STATUS(): TerminalNode | undefined;
    X509(): TerminalNode | undefined;
    XA(): TerminalNode | undefined;
    XA_RECOVER_ADMIN(): TerminalNode | undefined;
    XML(): TerminalNode | undefined;
    BINLOG_MONITOR(): TerminalNode | undefined;
    BINLOG_REPLAY(): TerminalNode | undefined;
    CURRENT_ROLE(): TerminalNode | undefined;
    CYCLE(): TerminalNode | undefined;
    ENCRYPTED(): TerminalNode | undefined;
    ENCRYPTION_KEY_ID(): TerminalNode | undefined;
    FEDERATED_ADMIN(): TerminalNode | undefined;
    INCREMENT(): TerminalNode | undefined;
    LASTVAL(): TerminalNode | undefined;
    LOCKED(): TerminalNode | undefined;
    MAXVALUE(): TerminalNode | undefined;
    MINVALUE(): TerminalNode | undefined;
    NEXTVAL(): TerminalNode | undefined;
    NOCACHE(): TerminalNode | undefined;
    NOCYCLE(): TerminalNode | undefined;
    NOMAXVALUE(): TerminalNode | undefined;
    NOMINVALUE(): TerminalNode | undefined;
    PERSISTENT(): TerminalNode | undefined;
    PREVIOUS(): TerminalNode | undefined;
    READ_ONLY_ADMIN(): TerminalNode | undefined;
    REPLICA(): TerminalNode | undefined;
    REPLICATION_MASTER_ADMIN(): TerminalNode | undefined;
    RESTART(): TerminalNode | undefined;
    SEQUENCE(): TerminalNode | undefined;
    SETVAL(): TerminalNode | undefined;
    SKIP_(): TerminalNode | undefined;
    STATEMENT(): TerminalNode | undefined;
    VIA(): TerminalNode | undefined;
    MONITOR(): TerminalNode | undefined;
    READ_ONLY(): TerminalNode | undefined;
    REPLAY(): TerminalNode | undefined;
    USER_STATISTICS(): TerminalNode | undefined;
    CLIENT_STATISTICS(): TerminalNode | undefined;
    INDEX_STATISTICS(): TerminalNode | undefined;
    TABLE_STATISTICS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
export declare class FunctionNameBaseContext extends ParserRuleContext {
    ABS(): TerminalNode | undefined;
    ACOS(): TerminalNode | undefined;
    ADDDATE(): TerminalNode | undefined;
    ADDTIME(): TerminalNode | undefined;
    AES_DECRYPT(): TerminalNode | undefined;
    AES_ENCRYPT(): TerminalNode | undefined;
    AREA(): TerminalNode | undefined;
    ASBINARY(): TerminalNode | undefined;
    ASIN(): TerminalNode | undefined;
    ASTEXT(): TerminalNode | undefined;
    ASWKB(): TerminalNode | undefined;
    ASWKT(): TerminalNode | undefined;
    ASYMMETRIC_DECRYPT(): TerminalNode | undefined;
    ASYMMETRIC_DERIVE(): TerminalNode | undefined;
    ASYMMETRIC_ENCRYPT(): TerminalNode | undefined;
    ASYMMETRIC_SIGN(): TerminalNode | undefined;
    ASYMMETRIC_VERIFY(): TerminalNode | undefined;
    ATAN(): TerminalNode | undefined;
    ATAN2(): TerminalNode | undefined;
    BENCHMARK(): TerminalNode | undefined;
    BIN(): TerminalNode | undefined;
    BIT_COUNT(): TerminalNode | undefined;
    BIT_LENGTH(): TerminalNode | undefined;
    BUFFER(): TerminalNode | undefined;
    CEIL(): TerminalNode | undefined;
    CEILING(): TerminalNode | undefined;
    CENTROID(): TerminalNode | undefined;
    CHARACTER_LENGTH(): TerminalNode | undefined;
    CHARSET(): TerminalNode | undefined;
    CHAR_LENGTH(): TerminalNode | undefined;
    COERCIBILITY(): TerminalNode | undefined;
    COLLATION(): TerminalNode | undefined;
    COMPRESS(): TerminalNode | undefined;
    CONCAT(): TerminalNode | undefined;
    CONCAT_WS(): TerminalNode | undefined;
    CONNECTION_ID(): TerminalNode | undefined;
    CONV(): TerminalNode | undefined;
    CONVERT_TZ(): TerminalNode | undefined;
    COS(): TerminalNode | undefined;
    COT(): TerminalNode | undefined;
    COUNT(): TerminalNode | undefined;
    CRC32(): TerminalNode | undefined;
    CREATE_ASYMMETRIC_PRIV_KEY(): TerminalNode | undefined;
    CREATE_ASYMMETRIC_PUB_KEY(): TerminalNode | undefined;
    CREATE_DH_PARAMETERS(): TerminalNode | undefined;
    CREATE_DIGEST(): TerminalNode | undefined;
    CROSSES(): TerminalNode | undefined;
    CUME_DIST(): TerminalNode | undefined;
    DATABASE(): TerminalNode | undefined;
    DATE(): TerminalNode | undefined;
    DATEDIFF(): TerminalNode | undefined;
    DATE_FORMAT(): TerminalNode | undefined;
    DAY(): TerminalNode | undefined;
    DAYNAME(): TerminalNode | undefined;
    DAYOFMONTH(): TerminalNode | undefined;
    DAYOFWEEK(): TerminalNode | undefined;
    DAYOFYEAR(): TerminalNode | undefined;
    DECODE(): TerminalNode | undefined;
    DEGREES(): TerminalNode | undefined;
    DENSE_RANK(): TerminalNode | undefined;
    DES_DECRYPT(): TerminalNode | undefined;
    DES_ENCRYPT(): TerminalNode | undefined;
    DIMENSION(): TerminalNode | undefined;
    DISJOINT(): TerminalNode | undefined;
    ELT(): TerminalNode | undefined;
    ENCODE(): TerminalNode | undefined;
    ENCRYPT(): TerminalNode | undefined;
    ENDPOINT(): TerminalNode | undefined;
    ENVELOPE(): TerminalNode | undefined;
    EQUALS(): TerminalNode | undefined;
    EXP(): TerminalNode | undefined;
    EXPORT_SET(): TerminalNode | undefined;
    EXTERIORRING(): TerminalNode | undefined;
    EXTRACTVALUE(): TerminalNode | undefined;
    FIELD(): TerminalNode | undefined;
    FIND_IN_SET(): TerminalNode | undefined;
    FIRST_VALUE(): TerminalNode | undefined;
    FLOOR(): TerminalNode | undefined;
    FORMAT(): TerminalNode | undefined;
    FOUND_ROWS(): TerminalNode | undefined;
    FROM_BASE64(): TerminalNode | undefined;
    FROM_DAYS(): TerminalNode | undefined;
    FROM_UNIXTIME(): TerminalNode | undefined;
    GEOMCOLLFROMTEXT(): TerminalNode | undefined;
    GEOMCOLLFROMWKB(): TerminalNode | undefined;
    GEOMETRYCOLLECTION(): TerminalNode | undefined;
    GEOMETRYCOLLECTIONFROMTEXT(): TerminalNode | undefined;
    GEOMETRYCOLLECTIONFROMWKB(): TerminalNode | undefined;
    GEOMETRYFROMTEXT(): TerminalNode | undefined;
    GEOMETRYFROMWKB(): TerminalNode | undefined;
    GEOMETRYN(): TerminalNode | undefined;
    GEOMETRYTYPE(): TerminalNode | undefined;
    GEOMFROMTEXT(): TerminalNode | undefined;
    GEOMFROMWKB(): TerminalNode | undefined;
    GET_FORMAT(): TerminalNode | undefined;
    GET_LOCK(): TerminalNode | undefined;
    GLENGTH(): TerminalNode | undefined;
    GREATEST(): TerminalNode | undefined;
    GTID_SUBSET(): TerminalNode | undefined;
    GTID_SUBTRACT(): TerminalNode | undefined;
    HEX(): TerminalNode | undefined;
    HOUR(): TerminalNode | undefined;
    IFNULL(): TerminalNode | undefined;
    INET6_ATON(): TerminalNode | undefined;
    INET6_NTOA(): TerminalNode | undefined;
    INET_ATON(): TerminalNode | undefined;
    INET_NTOA(): TerminalNode | undefined;
    INSTR(): TerminalNode | undefined;
    INTERIORRINGN(): TerminalNode | undefined;
    INTERSECTS(): TerminalNode | undefined;
    INVISIBLE(): TerminalNode | undefined;
    ISCLOSED(): TerminalNode | undefined;
    ISEMPTY(): TerminalNode | undefined;
    ISNULL(): TerminalNode | undefined;
    ISSIMPLE(): TerminalNode | undefined;
    IS_FREE_LOCK(): TerminalNode | undefined;
    IS_IPV4(): TerminalNode | undefined;
    IS_IPV4_COMPAT(): TerminalNode | undefined;
    IS_IPV4_MAPPED(): TerminalNode | undefined;
    IS_IPV6(): TerminalNode | undefined;
    IS_USED_LOCK(): TerminalNode | undefined;
    LAG(): TerminalNode | undefined;
    LAST_INSERT_ID(): TerminalNode | undefined;
    LAST_VALUE(): TerminalNode | undefined;
    LCASE(): TerminalNode | undefined;
    LEAD(): TerminalNode | undefined;
    LEAST(): TerminalNode | undefined;
    LEFT(): TerminalNode | undefined;
    LENGTH(): TerminalNode | undefined;
    LINEFROMTEXT(): TerminalNode | undefined;
    LINEFROMWKB(): TerminalNode | undefined;
    LINESTRING(): TerminalNode | undefined;
    LINESTRINGFROMTEXT(): TerminalNode | undefined;
    LINESTRINGFROMWKB(): TerminalNode | undefined;
    LN(): TerminalNode | undefined;
    LOAD_FILE(): TerminalNode | undefined;
    LOCATE(): TerminalNode | undefined;
    LOG(): TerminalNode | undefined;
    LOG10(): TerminalNode | undefined;
    LOG2(): TerminalNode | undefined;
    LOWER(): TerminalNode | undefined;
    LPAD(): TerminalNode | undefined;
    LTRIM(): TerminalNode | undefined;
    MAKEDATE(): TerminalNode | undefined;
    MAKETIME(): TerminalNode | undefined;
    MAKE_SET(): TerminalNode | undefined;
    MASTER_POS_WAIT(): TerminalNode | undefined;
    MBRCONTAINS(): TerminalNode | undefined;
    MBRDISJOINT(): TerminalNode | undefined;
    MBREQUAL(): TerminalNode | undefined;
    MBRINTERSECTS(): TerminalNode | undefined;
    MBROVERLAPS(): TerminalNode | undefined;
    MBRTOUCHES(): TerminalNode | undefined;
    MBRWITHIN(): TerminalNode | undefined;
    MD5(): TerminalNode | undefined;
    MICROSECOND(): TerminalNode | undefined;
    MINUTE(): TerminalNode | undefined;
    MLINEFROMTEXT(): TerminalNode | undefined;
    MLINEFROMWKB(): TerminalNode | undefined;
    MOD(): TerminalNode | undefined;
    MONTH(): TerminalNode | undefined;
    MONTHNAME(): TerminalNode | undefined;
    MPOINTFROMTEXT(): TerminalNode | undefined;
    MPOINTFROMWKB(): TerminalNode | undefined;
    MPOLYFROMTEXT(): TerminalNode | undefined;
    MPOLYFROMWKB(): TerminalNode | undefined;
    MULTILINESTRING(): TerminalNode | undefined;
    MULTILINESTRINGFROMTEXT(): TerminalNode | undefined;
    MULTILINESTRINGFROMWKB(): TerminalNode | undefined;
    MULTIPOINT(): TerminalNode | undefined;
    MULTIPOINTFROMTEXT(): TerminalNode | undefined;
    MULTIPOINTFROMWKB(): TerminalNode | undefined;
    MULTIPOLYGON(): TerminalNode | undefined;
    MULTIPOLYGONFROMTEXT(): TerminalNode | undefined;
    MULTIPOLYGONFROMWKB(): TerminalNode | undefined;
    NAME_CONST(): TerminalNode | undefined;
    NTH_VALUE(): TerminalNode | undefined;
    NTILE(): TerminalNode | undefined;
    NULLIF(): TerminalNode | undefined;
    NUMGEOMETRIES(): TerminalNode | undefined;
    NUMINTERIORRINGS(): TerminalNode | undefined;
    NUMPOINTS(): TerminalNode | undefined;
    OCT(): TerminalNode | undefined;
    OCTET_LENGTH(): TerminalNode | undefined;
    ORD(): TerminalNode | undefined;
    OVERLAPS(): TerminalNode | undefined;
    PERCENT_RANK(): TerminalNode | undefined;
    PERIOD_ADD(): TerminalNode | undefined;
    PERIOD_DIFF(): TerminalNode | undefined;
    PI(): TerminalNode | undefined;
    POINT(): TerminalNode | undefined;
    POINTFROMTEXT(): TerminalNode | undefined;
    POINTFROMWKB(): TerminalNode | undefined;
    POINTN(): TerminalNode | undefined;
    POLYFROMTEXT(): TerminalNode | undefined;
    POLYFROMWKB(): TerminalNode | undefined;
    POLYGON(): TerminalNode | undefined;
    POLYGONFROMTEXT(): TerminalNode | undefined;
    POLYGONFROMWKB(): TerminalNode | undefined;
    POSITION(): TerminalNode | undefined;
    POW(): TerminalNode | undefined;
    POWER(): TerminalNode | undefined;
    QUARTER(): TerminalNode | undefined;
    QUOTE(): TerminalNode | undefined;
    RADIANS(): TerminalNode | undefined;
    RAND(): TerminalNode | undefined;
    RANK(): TerminalNode | undefined;
    RANDOM_BYTES(): TerminalNode | undefined;
    RELEASE_LOCK(): TerminalNode | undefined;
    REVERSE(): TerminalNode | undefined;
    RIGHT(): TerminalNode | undefined;
    ROUND(): TerminalNode | undefined;
    ROW_COUNT(): TerminalNode | undefined;
    ROW_NUMBER(): TerminalNode | undefined;
    RPAD(): TerminalNode | undefined;
    RTRIM(): TerminalNode | undefined;
    SCHEMA(): TerminalNode | undefined;
    SECOND(): TerminalNode | undefined;
    SEC_TO_TIME(): TerminalNode | undefined;
    SESSION_USER(): TerminalNode | undefined;
    SESSION_VARIABLES_ADMIN(): TerminalNode | undefined;
    SHA(): TerminalNode | undefined;
    SHA1(): TerminalNode | undefined;
    SHA2(): TerminalNode | undefined;
    SIGN(): TerminalNode | undefined;
    SIN(): TerminalNode | undefined;
    SLEEP(): TerminalNode | undefined;
    SOUNDEX(): TerminalNode | undefined;
    SQL_THREAD_WAIT_AFTER_GTIDS(): TerminalNode | undefined;
    SQRT(): TerminalNode | undefined;
    SRID(): TerminalNode | undefined;
    STARTPOINT(): TerminalNode | undefined;
    STRCMP(): TerminalNode | undefined;
    STR_TO_DATE(): TerminalNode | undefined;
    ST_AREA(): TerminalNode | undefined;
    ST_ASBINARY(): TerminalNode | undefined;
    ST_ASTEXT(): TerminalNode | undefined;
    ST_ASWKB(): TerminalNode | undefined;
    ST_ASWKT(): TerminalNode | undefined;
    ST_BUFFER(): TerminalNode | undefined;
    ST_CENTROID(): TerminalNode | undefined;
    ST_CONTAINS(): TerminalNode | undefined;
    ST_CROSSES(): TerminalNode | undefined;
    ST_DIFFERENCE(): TerminalNode | undefined;
    ST_DIMENSION(): TerminalNode | undefined;
    ST_DISJOINT(): TerminalNode | undefined;
    ST_DISTANCE(): TerminalNode | undefined;
    ST_ENDPOINT(): TerminalNode | undefined;
    ST_ENVELOPE(): TerminalNode | undefined;
    ST_EQUALS(): TerminalNode | undefined;
    ST_EXTERIORRING(): TerminalNode | undefined;
    ST_GEOMCOLLFROMTEXT(): TerminalNode | undefined;
    ST_GEOMCOLLFROMTXT(): TerminalNode | undefined;
    ST_GEOMCOLLFROMWKB(): TerminalNode | undefined;
    ST_GEOMETRYCOLLECTIONFROMTEXT(): TerminalNode | undefined;
    ST_GEOMETRYCOLLECTIONFROMWKB(): TerminalNode | undefined;
    ST_GEOMETRYFROMTEXT(): TerminalNode | undefined;
    ST_GEOMETRYFROMWKB(): TerminalNode | undefined;
    ST_GEOMETRYN(): TerminalNode | undefined;
    ST_GEOMETRYTYPE(): TerminalNode | undefined;
    ST_GEOMFROMTEXT(): TerminalNode | undefined;
    ST_GEOMFROMWKB(): TerminalNode | undefined;
    ST_INTERIORRINGN(): TerminalNode | undefined;
    ST_INTERSECTION(): TerminalNode | undefined;
    ST_INTERSECTS(): TerminalNode | undefined;
    ST_ISCLOSED(): TerminalNode | undefined;
    ST_ISEMPTY(): TerminalNode | undefined;
    ST_ISSIMPLE(): TerminalNode | undefined;
    ST_LINEFROMTEXT(): TerminalNode | undefined;
    ST_LINEFROMWKB(): TerminalNode | undefined;
    ST_LINESTRINGFROMTEXT(): TerminalNode | undefined;
    ST_LINESTRINGFROMWKB(): TerminalNode | undefined;
    ST_NUMGEOMETRIES(): TerminalNode | undefined;
    ST_NUMINTERIORRING(): TerminalNode | undefined;
    ST_NUMINTERIORRINGS(): TerminalNode | undefined;
    ST_NUMPOINTS(): TerminalNode | undefined;
    ST_OVERLAPS(): TerminalNode | undefined;
    ST_POINTFROMTEXT(): TerminalNode | undefined;
    ST_POINTFROMWKB(): TerminalNode | undefined;
    ST_POINTN(): TerminalNode | undefined;
    ST_POLYFROMTEXT(): TerminalNode | undefined;
    ST_POLYFROMWKB(): TerminalNode | undefined;
    ST_POLYGONFROMTEXT(): TerminalNode | undefined;
    ST_POLYGONFROMWKB(): TerminalNode | undefined;
    ST_SRID(): TerminalNode | undefined;
    ST_STARTPOINT(): TerminalNode | undefined;
    ST_SYMDIFFERENCE(): TerminalNode | undefined;
    ST_TOUCHES(): TerminalNode | undefined;
    ST_UNION(): TerminalNode | undefined;
    ST_WITHIN(): TerminalNode | undefined;
    ST_X(): TerminalNode | undefined;
    ST_Y(): TerminalNode | undefined;
    SUBDATE(): TerminalNode | undefined;
    SUBSTRING_INDEX(): TerminalNode | undefined;
    SUBTIME(): TerminalNode | undefined;
    SYSTEM_USER(): TerminalNode | undefined;
    TAN(): TerminalNode | undefined;
    TIME(): TerminalNode | undefined;
    TIMEDIFF(): TerminalNode | undefined;
    TIMESTAMP(): TerminalNode | undefined;
    TIMESTAMPADD(): TerminalNode | undefined;
    TIMESTAMPDIFF(): TerminalNode | undefined;
    TIME_FORMAT(): TerminalNode | undefined;
    TIME_TO_SEC(): TerminalNode | undefined;
    TOUCHES(): TerminalNode | undefined;
    TO_BASE64(): TerminalNode | undefined;
    TO_DAYS(): TerminalNode | undefined;
    TO_SECONDS(): TerminalNode | undefined;
    UCASE(): TerminalNode | undefined;
    UNCOMPRESS(): TerminalNode | undefined;
    UNCOMPRESSED_LENGTH(): TerminalNode | undefined;
    UNHEX(): TerminalNode | undefined;
    UNIX_TIMESTAMP(): TerminalNode | undefined;
    UPDATEXML(): TerminalNode | undefined;
    UPPER(): TerminalNode | undefined;
    UUID(): TerminalNode | undefined;
    UUID_SHORT(): TerminalNode | undefined;
    VALIDATE_PASSWORD_STRENGTH(): TerminalNode | undefined;
    VERSION(): TerminalNode | undefined;
    VISIBLE(): TerminalNode | undefined;
    WAIT_UNTIL_SQL_THREAD_AFTER_GTIDS(): TerminalNode | undefined;
    WEEK(): TerminalNode | undefined;
    WEEKDAY(): TerminalNode | undefined;
    WEEKOFYEAR(): TerminalNode | undefined;
    WEIGHT_STRING(): TerminalNode | undefined;
    WITHIN(): TerminalNode | undefined;
    YEAR(): TerminalNode | undefined;
    YEARWEEK(): TerminalNode | undefined;
    Y_FUNCTION(): TerminalNode | undefined;
    X_FUNCTION(): TerminalNode | undefined;
    JSON_ARRAY(): TerminalNode | undefined;
    JSON_OBJECT(): TerminalNode | undefined;
    JSON_QUOTE(): TerminalNode | undefined;
    JSON_CONTAINS(): TerminalNode | undefined;
    JSON_CONTAINS_PATH(): TerminalNode | undefined;
    JSON_EXTRACT(): TerminalNode | undefined;
    JSON_KEYS(): TerminalNode | undefined;
    JSON_OVERLAPS(): TerminalNode | undefined;
    JSON_SEARCH(): TerminalNode | undefined;
    JSON_VALUE(): TerminalNode | undefined;
    JSON_ARRAY_APPEND(): TerminalNode | undefined;
    JSON_ARRAY_INSERT(): TerminalNode | undefined;
    JSON_INSERT(): TerminalNode | undefined;
    JSON_MERGE(): TerminalNode | undefined;
    JSON_MERGE_PATCH(): TerminalNode | undefined;
    JSON_MERGE_PRESERVE(): TerminalNode | undefined;
    JSON_REMOVE(): TerminalNode | undefined;
    JSON_REPLACE(): TerminalNode | undefined;
    JSON_SET(): TerminalNode | undefined;
    JSON_UNQUOTE(): TerminalNode | undefined;
    JSON_DEPTH(): TerminalNode | undefined;
    JSON_LENGTH(): TerminalNode | undefined;
    JSON_TYPE(): TerminalNode | undefined;
    JSON_VALID(): TerminalNode | undefined;
    JSON_TABLE(): TerminalNode | undefined;
    JSON_SCHEMA_VALID(): TerminalNode | undefined;
    JSON_SCHEMA_VALIDATION_REPORT(): TerminalNode | undefined;
    JSON_PRETTY(): TerminalNode | undefined;
    JSON_STORAGE_FREE(): TerminalNode | undefined;
    JSON_STORAGE_SIZE(): TerminalNode | undefined;
    JSON_ARRAYAGG(): TerminalNode | undefined;
    JSON_OBJECTAGG(): TerminalNode | undefined;
    LASTVAL(): TerminalNode | undefined;
    NEXTVAL(): TerminalNode | undefined;
    SETVAL(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    get ruleIndex(): number;
    enterRule(listener: MariaDBParserListener): void;
    exitRule(listener: MariaDBParserListener): void;
}
