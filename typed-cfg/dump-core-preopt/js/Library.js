var it = {"binds":[{"rec":false,"binds":[{"terms":6,"var":{"name":"map'","id":"r-0-248987","info":{"args":[],"poly":["a","b","var","c"],"term":"","result":"(a -> b) -> Code (a -> b) -> CFG () var c a -> CFG () var c b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WMap","module":"CFG","id":"r-66702","info":"$WMap"}}}},{"terms":6,"var":{"name":"<.>","id":"r-0-248982","info":{"args":[],"poly":["var","c","a","b"],"term":"","result":"CFG () var c (a -> b) -> CFG () var c a -> CFG () var c b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WSeq","module":"CFG","id":"r-66555","info":"$WSeq"}}}},{"terms":34,"var":{"name":"<.","id":"r-0-248981","info":{"args":[],"poly":["var","c","a","b"],"term":"","result":"CFG () var c a -> CFG () var c b -> CFG () var c a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"a","id":"a-1-249075","info":{"args":[],"poly":[],"term":"","result":"CFG () var c a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"b","id":"a-2-249076","info":{"args":[],"poly":[],"term":"","result":"CFG () var c b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"args":[{"name":"a","id":"a-5-249077","info":{"args":[],"poly":[],"term":"","result":"a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"b","id":"a-6-249078","info":{"args":[],"poly":[],"term":"","result":"b","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"tag":"Var","var":{"name":"a","id":"a-5-249077"}}},{"args":[{"args":[{"args":[{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"a\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"newName","module":"Language.Haskell.TH.Syntax","id":"0-204","info":"newName"}}},{"args":[{"name":"a","id":"a-3-249079","info":{"args":[],"poly":[],"term":"","result":"Name","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"b\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"newName","module":"Language.Haskell.TH.Syntax","id":"0-204","info":"newName"}}},{"args":[{"name":"b","id":"a-4-249080","info":{"args":[],"poly":[],"term":"","result":"Name","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"args":[{"tag":"Var","var":{"name":"a","id":"a-3-249079"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"varP","module":"Language.Haskell.TH.Lib.Internal","id":"0-241","info":"varP"}}},{"args":[{"args":[{"tag":"Var","var":{"name":"b","id":"a-4-249080"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"varP","module":"Language.Haskell.TH.Lib.Internal","id":"0-241","info":"varP"}}},{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}}},{"args":[{"tag":"Var","var":{"name":"a","id":"a-3-249079"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"varE","module":"Language.Haskell.TH.Lib.Internal","id":"0-270","info":"varE"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"lamE","module":"Language.Haskell.TH.Lib.Internal","id":"0-279","info":"lamE"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"bindQ","module":"Language.Haskell.TH.Syntax","id":"0-201","info":"bindQ"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"bindQ","module":"Language.Haskell.TH.Syntax","id":"0-201","info":"bindQ"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unsafeTExpCoerce","module":"Language.Haskell.TH.Syntax","id":"0-213","info":"unsafeTExpCoerce"}}},{"tag":"Var","var":{"name":"a","id":"a-1-249075"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"map'","id":"r-0-248987"}}},{"tag":"Var","var":{"name":"b","id":"a-2-249076"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.>","id":"r-0-248982"}}}}},{"terms":34,"var":{"name":".>","id":"r-0-176022","info":{"args":[],"poly":["var","c","a","b"],"term":"","result":"CFG () var c a -> CFG () var c b -> CFG () var c b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"a","id":"a-7-249081","info":{"args":[],"poly":[],"term":"","result":"CFG () var c a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"b","id":"a-8-249082","info":{"args":[],"poly":[],"term":"","result":"CFG () var c b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"args":[{"name":"a","id":"a-11-249083","info":{"args":[],"poly":[],"term":"","result":"a","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"b","id":"a-12-249084","info":{"args":[],"poly":[],"term":"","result":"b","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"tag":"Var","var":{"name":"b","id":"a-12-249084"}}},{"args":[{"args":[{"args":[{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"a\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"newName","module":"Language.Haskell.TH.Syntax","id":"0-204","info":"newName"}}},{"args":[{"name":"a","id":"a-9-249085","info":{"args":[],"poly":[],"term":"","result":"Name","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"b\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"newName","module":"Language.Haskell.TH.Syntax","id":"0-204","info":"newName"}}},{"args":[{"name":"b","id":"a-10-249086","info":{"args":[],"poly":[],"term":"","result":"Name","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"args":[{"tag":"Var","var":{"name":"a","id":"a-9-249085"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"varP","module":"Language.Haskell.TH.Lib.Internal","id":"0-241","info":"varP"}}},{"args":[{"args":[{"tag":"Var","var":{"name":"b","id":"a-10-249086"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"varP","module":"Language.Haskell.TH.Lib.Internal","id":"0-241","info":"varP"}}},{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}}},{"args":[{"tag":"Var","var":{"name":"b","id":"a-10-249086"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"varE","module":"Language.Haskell.TH.Lib.Internal","id":"0-270","info":"varE"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"lamE","module":"Language.Haskell.TH.Lib.Internal","id":"0-279","info":"lamE"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"bindQ","module":"Language.Haskell.TH.Syntax","id":"0-201","info":"bindQ"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"bindQ","module":"Language.Haskell.TH.Syntax","id":"0-201","info":"bindQ"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unsafeTExpCoerce","module":"Language.Haskell.TH.Syntax","id":"0-213","info":"unsafeTExpCoerce"}}},{"tag":"Var","var":{"name":"a","id":"a-7-249081"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"map'","id":"r-0-248987"}}},{"tag":"Var","var":{"name":"b","id":"a-8-249082"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.>","id":"r-0-248982"}}}}},{"terms":30,"var":{"name":"brackets","id":"r-0-248985","info":{"args":[],"poly":["c","v"],"term":"","result":"(Char -> c) -> CFG () v c ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"cc","id":"a-13-249090","info":{"args":[],"poly":[],"term":"","result":"Char -> c","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Mu","module":"CFG","id":"r-1578","info":"Mu"}}},{"args":[{"name":"t","id":"a-14-249091","info":{"args":[],"poly":[],"term":"","result":"v c ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WEmpty","module":"CFG","id":"r-66496","info":"$WEmpty"}}},{"args":[{"args":[{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"args":[{"tag":"Lit","lit":{"type":"char","lit":"'('"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"cc","id":"a-13-249090"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"t","id":"a-14-249091"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":".>","id":"r-0-176022"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"args":[{"tag":"Lit","lit":{"type":"char","lit":"')'"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"cc","id":"a-13-249090"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"t","id":"a-14-249091"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Or","module":"CFG","id":"r-1581","info":"Or"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$","module":"GHC.Base","id":"0-123","info":"$"}}}}},{"terms":45,"var":{"name":"alternatingBrackets","id":"r-0-248984","info":{"args":[],"poly":["v"],"term":"","result":"CFG () v Char ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Mu","module":"CFG","id":"r-1578","info":"Mu"}}},{"args":[{"name":"t","id":"a-15-249092","info":{"args":[],"poly":[],"term":"","result":"v Char ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WEmpty","module":"CFG","id":"r-66496","info":"$WEmpty"}}},{"args":[{"args":[{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"'('"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"t","id":"a-15-249092"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":".>","id":"r-0-176022"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"')'"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"t","id":"a-15-249092"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Or","module":"CFG","id":"r-1581","info":"Or"}}},{"args":[{"args":[{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"'['"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"t","id":"a-15-249092"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":".>","id":"r-0-176022"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"']'"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"t","id":"a-15-249092"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Or","module":"CFG","id":"r-1581","info":"Or"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$","module":"GHC.Base","id":"0-123","info":"$"}}}},{"terms":70,"var":{"name":"alternate","id":"r-0-248983","info":{"args":[],"poly":["v"],"term":"","result":"CFG () v Char ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Mu","module":"CFG","id":"r-1578","info":"Mu"}}},{"args":[{"name":"t","id":"a-16-249093","info":{"args":[],"poly":[],"term":"","result":"v Char ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WEmpty","module":"CFG","id":"r-66496","info":"$WEmpty"}}},{"args":[{"args":[{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"'('"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}},{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Mu","module":"CFG","id":"r-1578","info":"Mu"}}},{"args":[{"name":"u","id":"a-17-249094","info":{"args":[],"poly":[],"term":"","result":"v Char ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WEmpty","module":"CFG","id":"r-66496","info":"$WEmpty"}}},{"args":[{"args":[{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"'{'"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}},{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Mu","module":"CFG","id":"r-1578","info":"Mu"}}},{"args":[{"name":"v","id":"a-18-249095","info":{"args":[],"poly":[],"term":"","result":"v Char ()","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WEmpty","module":"CFG","id":"r-66496","info":"$WEmpty"}}},{"args":[{"args":[{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"'['"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"t","id":"a-16-249093"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":".>","id":"r-0-176022"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"']'"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"v","id":"a-18-249095"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Or","module":"CFG","id":"r-1581","info":"Or"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$","module":"GHC.Base","id":"0-123","info":"$"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":".>","id":"r-0-176022"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"'}'"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"u","id":"a-17-249094"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Or","module":"CFG","id":"r-1581","info":"Or"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$","module":"GHC.Base","id":"0-123","info":"$"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":".>","id":"r-0-176022"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"tag":"Lit","lit":{"type":"char","lit":"')'"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"C#","module":"GHC.Types","id":"6-4","info":"C#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WChar","module":"CFG","id":"r-66525","info":"$WChar"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"t","id":"a-16-249093"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.","id":"r-0-248981"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Or","module":"CFG","id":"r-1581","info":"Or"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$","module":"GHC.Base","id":"0-123","info":"$"}}}},{"terms":45,"var":{"name":"many","id":"r-0-248986","info":{"args":[],"poly":["a","v","c"],"term":"","result":"Lift a => CFG () v c a -> CFG () v c [a]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"$dLift","id":"a-19-249608","info":{"args":[],"poly":[],"term":"","result":"Lift a","usage":{"occ":"Dead","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"c","id":"a-20-249087","info":{"args":[],"poly":[],"term":"","result":"CFG () v c a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Mu","module":"CFG","id":"r-1578","info":"Mu"}}},{"args":[{"name":"x","id":"a-21-249088","info":{"args":[],"poly":[],"term":"","result":"v c [a]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"args":[{"args":[{"args":[{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"const","module":"GHC.Base","id":"r-2231","info":"const"}}},{"args":[{"args":[{"args":[{"args":[{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"base\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}},{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"GHC.Base\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}},{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"const\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"mkNameG_v","module":"Language.Haskell.TH.Syntax","id":"0-206","info":"mkNameG_v"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"varE","module":"Language.Haskell.TH.Lib.Internal","id":"0-270","info":"varE"}}},{"args":[{"tag":"Glob","var":{"name":"[]","module":"GHC.Types","id":"6-34","info":"[]"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"listE","module":"Language.Haskell.TH.Lib.Internal","id":"0-294","info":"listE"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"appE","module":"Language.Haskell.TH.Lib.Internal","id":"0-273","info":"appE"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unsafeTExpCoerce","module":"Language.Haskell.TH.Syntax","id":"0-213","info":"unsafeTExpCoerce"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"map'","id":"r-0-248987"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$WEmpty","module":"CFG","id":"r-66496","info":"$WEmpty"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$","module":"GHC.Base","id":"0-123","info":"$"}}},{"args":[{"args":[{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}},{"args":[{"args":[{"args":[{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"ghc-prim\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}},{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"GHC.Types\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}},{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\":\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"mkNameG_d","module":"Language.Haskell.TH.Syntax","id":"0-207","info":"mkNameG_d"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"conE","module":"Language.Haskell.TH.Lib.Internal","id":"0-271","info":"conE"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unsafeTExpCoerce","module":"Language.Haskell.TH.Syntax","id":"0-213","info":"unsafeTExpCoerce"}}},{"tag":"Var","var":{"name":"c","id":"a-20-249087"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"map'","id":"r-0-248987"}}},{"args":[{"tag":"Glob","var":{"name":"()","module":"GHC.Tuple","id":"7-1","info":"()"}},{"tag":"Var","var":{"name":"x","id":"a-21-249088"}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Var","module":"CFG","id":"r-1572","info":"Var"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.>","id":"r-0-248982"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Or","module":"CFG","id":"r-1581","info":"Or"}}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"$","module":"GHC.Base","id":"0-123","info":"$"}}}}},{"terms":21,"var":{"name":"some","id":"r-0-248988","info":{"args":[],"poly":["a","v","c"],"term":"","result":"Lift a => CFG () v c a -> CFG () v c [a]","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"name":"$dLift","id":"a-22-249657","info":{"args":[],"poly":[],"term":"","result":"Lift a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},{"name":"c","id":"a-23-249089","info":{"args":[],"poly":[],"term":"","result":"CFG () v c a","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}}],"tag":"Lam","body":{"args":[{"args":[{"tag":"Glob","var":{"name":":","module":"GHC.Types","id":"6-7","info":":"}},{"args":[{"args":[{"args":[{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"ghc-prim\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}},{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"GHC.Types\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}},{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\":\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unpackCString#","module":"GHC.CString","id":"0-20","info":"unpackCString#"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"mkNameG_d","module":"Language.Haskell.TH.Syntax","id":"0-207","info":"mkNameG_d"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"conE","module":"Language.Haskell.TH.Lib.Internal","id":"0-271","info":"conE"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"unsafeTExpCoerce","module":"Language.Haskell.TH.Syntax","id":"0-213","info":"unsafeTExpCoerce"}}},{"tag":"Var","var":{"name":"c","id":"a-23-249089"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"map'","id":"r-0-248987"}}},{"args":[{"tag":"Var","var":{"name":"$dLift","id":"a-22-249657"}},{"tag":"Var","var":{"name":"c","id":"a-23-249089"}}],"tag":"App","fun":{"tag":"Var","var":{"name":"many","id":"r-0-248986"}}}],"tag":"App","fun":{"tag":"Var","var":{"name":"<.>","id":"r-0-248982"}}}}},{"terms":5,"var":{"name":"$trModule","id":"r-0-248989","info":{"args":[],"poly":[],"term":"","result":"Module","usage":{"occ":"","callAr":0,"oneShot":"","demand":"<L,U>"}}},"def":{"args":[{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"typed-cfg-0.1.0.0-EVHDS3Ui2OZBZK1G4Tub8u\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-89","info":"TrNameS"}}},{"args":[{"tag":"Lit","lit":{"type":"string","lit":"\"Library\""}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"TrNameS","module":"GHC.Types","id":"r-89","info":"TrNameS"}}}],"tag":"App","fun":{"tag":"Glob","var":{"name":"Module","module":"GHC.Types","id":"r-91","info":"Module"}}}}]}],"mod":"Library"}