var it = {"binds":[{"rec":false,"binds":[{"terms":1,"var":{"name":"$trModule","id":"s-0-264661","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"typed-cfg-0.1.0.0-EVHDS3Ui2OZBZK1G4Tub8u\""}}},{"terms":2,"var":{"name":"$trModule","id":"s-0-264663","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$trModule","id":"s-0-264661"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-89","info":"TrNameS"}}}},{"terms":1,"var":{"name":"$trModule","id":"s-0-264666","info":{"args":[],"poly":[],"term":"","result":"Addr#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"tag":"Lit","lit":{"type":"string","lit":"\"TestSExp\""}}},{"terms":2,"var":{"name":"$trModule","id":"s-0-264667","info":{"args":[],"poly":[],"term":"m1","result":"TrName","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$trModule","id":"s-0-264666"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-89","info":"TrNameS"}}}},{"terms":3,"var":{"name":"$trModule","id":"r-0-259881","info":{"args":[],"poly":[],"term":"m","result":"Module","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"$trModule","id":"s-0-264663"}},{"tag":"Var","var":{"name":"$trModule","id":"s-0-264667"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Module","module":"GHC.Types","id":"r-91","info":"Module"}}}},{"terms":3,"var":{"name":"lvl","id":"s-0-268931","info":{"args":[],"poly":[],"term":"m","result":"(String, [SExp])","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}},{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"(,)","module":"GHC.Tuple","id":"7-7","info":"(,)"}}}},{"terms":2,"var":{"name":"lvl","id":"s-0-268932","info":{"args":[],"poly":[],"term":"m2","result":"Maybe (String, [SExp])","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Var","var":{"name":"lvl","id":"s-0-268931"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Just","module":"GHC.Maybe","id":"6-28","info":"Just"}}}}]},{"rec":true,"binds":[{"terms":72,"var":{"name":"x","id":"s-0-266604","info":{"args":[{"strict":"S","use":"1*U","type":"String"}],"poly":[],"term":"","result":"Maybe (String, [SExp])","usage":{"occ":"LoopBreaker","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"a","id":"a-1-260990","info":{"args":[],"poly":[],"term":"","result":"String","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"tag":"Lam","body":{"expr":{"tag":"Var","var":{"name":"a","id":"a-1-260990"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"[]","module":"GHC.Types"}},"rhs":{"tag":"Var","var":{"name":"lvl","id":"s-0-268932"}}},{"binds":[{"name":"a1","id":"a-3-264742","info":{"args":[],"poly":[],"term":"","result":"Char","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S(S),U(U)>"}}},{"name":"as","id":"a-4-264743","info":{"args":[],"poly":[],"term":"","result":"[Char]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"con":{"tag":"DataAlt","con":{"name":":","module":"GHC.Types"}},"rhs":{"expr":{"tag":"Var","var":{"name":"a1","id":"a-3-264742"}},"tag":"Case","alts":[{"binds":[{"name":"y","id":"a-6-264934","info":{"args":[],"poly":[],"term":"","result":"Char#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,U>"}}}],"con":{"tag":"DataAlt","con":{"name":"C#","module":"GHC.Types"}},"rhs":{"expr":{"tag":"Var","var":{"name":"y","id":"a-6-264934"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DEFAULT"},"rhs":{"args":[{"args":[{"tag":"Var","var":{"name":"wild","id":"a-2-264737"}},{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"(,)","module":"GHC.Tuple","id":"7-7","info":"(,)"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Just","module":"GHC.Maybe","id":"6-28","info":"Just"}}}},{"binds":[],"con":{"tag":"LitAlt","lit":{"type":"char","lit":"'('"}},"rhs":{"expr":{"args":[{"tag":"Var","var":{"name":"as","id":"a-4-264743"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"x","id":"s-0-266604"}}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"Nothing","module":"GHC.Maybe"}},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[{"name":"x","id":"X-9-158313","info":{"args":[],"poly":[],"term":"","result":"(String, [SExp])","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S(SL),1*U(1*U,U)>"}}}],"con":{"tag":"DataAlt","con":{"name":"Just","module":"GHC.Maybe"}},"rhs":{"expr":{"tag":"Var","var":{"name":"x","id":"X-9-158313"}},"tag":"Case","alts":[{"binds":[{"name":"a","id":"a-11-261081","info":{"args":[],"poly":[],"term":"","result":"String","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}},{"name":"b","id":"a-12-261083","info":{"args":[],"poly":[],"term":"","result":"[SExp]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"con":{"tag":"DataAlt","con":{"name":"(,)","module":"GHC.Tuple"}},"rhs":{"expr":{"tag":"Var","var":{"name":"a","id":"a-11-261081"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"[]","module":"GHC.Types"}},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[{"name":"a1","id":"X-14-264835","info":{"args":[],"poly":[],"term":"","result":"Char","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S(S),1*U(1*U)>"}}},{"name":"as","id":"X-15-264837","info":{"args":[],"poly":[],"term":"","result":"[Char]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,1*U>"}}}],"con":{"tag":"DataAlt","con":{"name":":","module":"GHC.Types"}},"rhs":{"expr":{"tag":"Var","var":{"name":"a1","id":"X-14-264835"}},"tag":"Case","alts":[{"binds":[{"name":"y","id":"X-17-265009","info":{"args":[],"poly":[],"term":"","result":"Char#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"con":{"tag":"DataAlt","con":{"name":"C#","module":"GHC.Types"}},"rhs":{"expr":{"tag":"Var","var":{"name":"y","id":"X-17-265009"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DEFAULT"},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[],"con":{"tag":"LitAlt","lit":{"type":"char","lit":"')'"}},"rhs":{"expr":{"args":[{"tag":"Var","var":{"name":"as","id":"X-15-264837"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"x","id":"s-0-266604"}}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"Nothing","module":"GHC.Maybe"}},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[{"name":"x","id":"X-20-158357","info":{"args":[],"poly":[],"term":"","result":"(String, [SExp])","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U(U,U)>"}}}],"con":{"tag":"DataAlt","con":{"name":"Just","module":"GHC.Maybe"}},"rhs":{"expr":{"tag":"Var","var":{"name":"x","id":"X-20-158357"}},"tag":"Case","alts":[{"binds":[{"name":"a","id":"a-22-261074","info":{"args":[],"poly":[],"term":"","result":"String","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"b","id":"a-23-261075","info":{"args":[],"poly":[],"term":"","result":"[SExp]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"con":{"tag":"DataAlt","con":{"name":"(,)","module":"GHC.Tuple"}},"rhs":{"args":[{"args":[{"tag":"Var","var":{"name":"a","id":"a-22-261074"}},{"args":[{"args":[{"tag":"Var","var":{"name":"b","id":"a-12-261083"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"SSeq","module":"LibraryLMS","id":"r-249848","info":"SSeq"}}},{"tag":"Var","var":{"name":"b","id":"a-23-261075"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"(,)","module":"GHC.Tuple","id":"7-7","info":"(,)"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Just","module":"GHC.Maybe","id":"6-28","info":"Just"}}}}],"val":{"name":"wild","id":"X-21-36","info":{"args":[],"poly":[],"term":"","result":"(String, [SExp])","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-19-158352","info":{"args":[],"poly":[],"term":"","result":"Maybe (String, [SExp])","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-18-78","info":{"args":[],"poly":[],"term":"","result":"Char#","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild1","id":"X-16-265005","info":{"args":[],"poly":[],"term":"","result":"Char","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-13-264828","info":{"args":[],"poly":[],"term":"","result":"[Char]","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-10-134","info":{"args":[],"poly":[],"term":"","result":"(String, [SExp])","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-8-158308","info":{"args":[],"poly":[],"term":"","result":"Maybe (String, [SExp])","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}},{"binds":[],"con":{"tag":"LitAlt","lit":{"type":"char","lit":"'a'"}},"rhs":{"expr":{"args":[{"tag":"Var","var":{"name":"as","id":"a-4-264743"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"x","id":"s-0-266604"}}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"Nothing","module":"GHC.Maybe"}},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[{"name":"x","id":"X-25-158354","info":{"args":[],"poly":[],"term":"","result":"(String, [SExp])","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U(U,U)>"}}}],"con":{"tag":"DataAlt","con":{"name":"Just","module":"GHC.Maybe"}},"rhs":{"expr":{"tag":"Var","var":{"name":"x","id":"X-25-158354"}},"tag":"Case","alts":[{"binds":[{"name":"a","id":"a-27-261036","info":{"args":[],"poly":[],"term":"","result":"String","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"b","id":"a-28-261037","info":{"args":[],"poly":[],"term":"","result":"[SExp]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"con":{"tag":"DataAlt","con":{"name":"(,)","module":"GHC.Tuple"}},"rhs":{"args":[{"args":[{"tag":"Var","var":{"name":"a","id":"a-27-261036"}},{"args":[{"args":[{"tag":"Var","var":{"name":"wild1","id":"a-5-264932"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Atom","module":"LibraryLMS","id":"r-249839","info":"Atom"}}},{"tag":"Var","var":{"name":"b","id":"a-28-261037"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"(,)","module":"GHC.Tuple","id":"7-7","info":"(,)"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Just","module":"GHC.Maybe","id":"6-28","info":"Just"}}}}],"val":{"name":"wild","id":"X-26-35","info":{"args":[],"poly":[],"term":"","result":"(String, [SExp])","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-24-158349","info":{"args":[],"poly":[],"term":"","result":"Maybe (String, [SExp])","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-7-37","info":{"args":[],"poly":[],"term":"","result":"Char#","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild1","id":"a-5-264932","info":{"args":[],"poly":[],"term":"","result":"Char","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}}}],"val":{"name":"wild","id":"a-2-264737","info":{"args":[],"poly":[],"term":"","result":"[Char]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}}}}]},{"rec":false,"binds":[{"terms":47,"var":{"name":"sexp_parser","id":"r-0-255921","info":{"args":[{"strict":"S","use":"1*U","type":"String"}],"poly":[],"term":"","result":"Maybe (String, SExp)","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"a","id":"a-29-260928","info":{"args":[],"poly":[],"term":"","result":"String","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"tag":"Lam","body":{"expr":{"tag":"Var","var":{"name":"a","id":"a-29-260928"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"[]","module":"GHC.Types"}},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[{"name":"a1","id":"a-31-264742","info":{"args":[],"poly":[],"term":"","result":"Char","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S(S),1*U(U)>"}}},{"name":"as","id":"a-32-264743","info":{"args":[],"poly":[],"term":"","result":"[Char]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"con":{"tag":"DataAlt","con":{"name":":","module":"GHC.Types"}},"rhs":{"expr":{"tag":"Var","var":{"name":"a1","id":"a-31-264742"}},"tag":"Case","alts":[{"binds":[{"name":"y","id":"a-34-264934","info":{"args":[],"poly":[],"term":"","result":"Char#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,U>"}}}],"con":{"tag":"DataAlt","con":{"name":"C#","module":"GHC.Types"}},"rhs":{"expr":{"tag":"Var","var":{"name":"y","id":"a-34-264934"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DEFAULT"},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[],"con":{"tag":"LitAlt","lit":{"type":"char","lit":"'('"}},"rhs":{"expr":{"args":[{"tag":"Var","var":{"name":"as","id":"a-32-264743"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"x","id":"s-0-266604"}}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"Nothing","module":"GHC.Maybe"}},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[{"name":"x","id":"X-37-158313","info":{"args":[],"poly":[],"term":"","result":"(String, [SExp])","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S(SL),1*U(1*U,U)>"}}}],"con":{"tag":"DataAlt","con":{"name":"Just","module":"GHC.Maybe"}},"rhs":{"expr":{"tag":"Var","var":{"name":"x","id":"X-37-158313"}},"tag":"Case","alts":[{"binds":[{"name":"a","id":"a-39-261081","info":{"args":[],"poly":[],"term":"","result":"String","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}},{"name":"b","id":"a-40-261083","info":{"args":[],"poly":[],"term":"","result":"[SExp]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"con":{"tag":"DataAlt","con":{"name":"(,)","module":"GHC.Tuple"}},"rhs":{"expr":{"tag":"Var","var":{"name":"a","id":"a-39-261081"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DataAlt","con":{"name":"[]","module":"GHC.Types"}},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[{"name":"a1","id":"X-42-264835","info":{"args":[],"poly":[],"term":"","result":"Char","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S(S),1*U(1*U)>"}}},{"name":"as","id":"X-43-264837","info":{"args":[],"poly":[],"term":"","result":"[Char]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"con":{"tag":"DataAlt","con":{"name":":","module":"GHC.Types"}},"rhs":{"expr":{"tag":"Var","var":{"name":"a1","id":"X-42-264835"}},"tag":"Case","alts":[{"binds":[{"name":"y","id":"X-45-265009","info":{"args":[],"poly":[],"term":"","result":"Char#","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<S,1*U>"}}}],"con":{"tag":"DataAlt","con":{"name":"C#","module":"GHC.Types"}},"rhs":{"expr":{"tag":"Var","var":{"name":"y","id":"X-45-265009"}},"tag":"Case","alts":[{"binds":[],"con":{"tag":"DEFAULT"},"rhs":{"tag":"Glob","var":{"name":"Nothing","module":"GHC.Maybe","id":"6-25","info":"Nothing"}}},{"binds":[],"con":{"tag":"LitAlt","lit":{"type":"char","lit":"')'"}},"rhs":{"args":[{"args":[{"tag":"Var","var":{"name":"as","id":"X-43-264837"}},{"args":[{"tag":"Var","var":{"name":"b","id":"a-40-261083"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"SSeq","module":"LibraryLMS","id":"r-249848","info":"SSeq"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"(,)","module":"GHC.Tuple","id":"7-7","info":"(,)"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Just","module":"GHC.Maybe","id":"6-28","info":"Just"}}}}],"val":{"name":"wild","id":"X-46-78","info":{"args":[],"poly":[],"term":"","result":"Char#","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild1","id":"X-44-265005","info":{"args":[],"poly":[],"term":"","result":"Char","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-41-264828","info":{"args":[],"poly":[],"term":"","result":"[Char]","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-38-134","info":{"args":[],"poly":[],"term":"","result":"(String, [SExp])","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild","id":"X-36-158308","info":{"args":[],"poly":[],"term":"","result":"Maybe (String, [SExp])","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}},{"binds":[],"con":{"tag":"LitAlt","lit":{"type":"char","lit":"'a'"}},"rhs":{"args":[{"args":[{"tag":"Var","var":{"name":"as","id":"a-32-264743"}},{"args":[{"tag":"Var","var":{"name":"wild1","id":"a-33-264932"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Atom","module":"LibraryLMS","id":"r-249839","info":"Atom"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"(,)","module":"GHC.Tuple","id":"7-7","info":"(,)"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Just","module":"GHC.Maybe","id":"6-28","info":"Just"}}}}],"val":{"name":"wild","id":"X-35-36","info":{"args":[],"poly":[],"term":"","result":"Char#","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}],"val":{"name":"wild1","id":"a-33-264932","info":{"args":[],"poly":[],"term":"","result":"Char","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}}}],"val":{"name":"wild","id":"a-30-264737","info":{"args":[],"poly":[],"term":"","result":"[Char]","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,A>"}}}}}}]}],"mod":"TestSExp"}